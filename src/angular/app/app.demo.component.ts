import {
  Inject,
  Component,
  OnInit,
  EventEmitter,
  AfterViewInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-second-demo',
  template: 'kushagra demo',
  styleUrls: ['./app.component.css'],
})
export class AppDemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('ngOnInit kushagra');
  }
}
