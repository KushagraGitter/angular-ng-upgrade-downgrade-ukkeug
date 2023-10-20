import { NgModule } from '@angular/core';
import { UserService } from '../../user/user.service';
import { AppCommonModule } from '../common/app.common.module';
import { CommonModule } from '../common/common.module';
import { AnalyticsComponent } from './analytics.component';
import { AnalyticsRoutingModule } from './analytics.routing.module';

@NgModule({
  imports: [AppCommonModule],
  declarations: [AnalyticsComponent],
  // entryComponents: [AnalyticsComponent],
  exports: [AnalyticsComponent],
})
export class AnalyticsModule {
  constructor() {}
}
