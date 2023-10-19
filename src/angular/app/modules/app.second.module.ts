import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from '../../user/user.service';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { AnalyticsModule } from '../analytics/analytics.module';
import { AppDemoComponent } from '../app.demo.component';

@NgModule({
  imports: [AnalyticsModule],
  declarations: [AppDemoComponent],
  providers: [UserService],
  entryComponents: [AppDemoComponent, AnalyticsComponent],
})
export class AppSecondModule {
  ngDoBootstrap() {}
}
