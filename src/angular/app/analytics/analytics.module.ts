import { NgModule } from '@angular/core';
import { UserService } from '../../user/user.service';
import { AnalyticsComponent } from './analytics.component';
import { AnalyticsRoutingModule } from './analytics.routing.module';

@NgModule({
  imports: [],
  declarations: [AnalyticsComponent],
  // entryComponents: [AnalyticsComponent],
})
export class AnalyticsModule {
  constructor() {}
}
