import {
  Inject,
  Component,
  OnInit,
  EventEmitter,
  AfterViewInit,
  Output,
} from '@angular/core';

import { AjsAppService } from '../../angularjs';

import { User, UserService } from '../user/user.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  name = 'Angular';
  user: User;

  constructor(
    private ajsAppService: AjsAppService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  onSelect(user: User) {
    console.log('Selected: ', user);
  }

  updateUsername() {
    this.user.username += '!';

    // we have to manualy detect changes in the child Angular JS component
    this.ajsAppService.detectChanges();
  }

  @Output()
  public isInitialized: EventEmitter<boolean> = new EventEmitter();

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    this.isInitialized.emit(true);
  }
}
