import { NgModule } from '@angular/core';
import { UserService } from '../../user/user.service';
import { AnalyticsComponent } from './analytics.component';

@NgModule({
  declarations: [AnalyticsComponent],
})
export class AnalyticsModule {
  constructor(private readonly userService: UserService) {
    console.log(userService.getUser());
  }
}
