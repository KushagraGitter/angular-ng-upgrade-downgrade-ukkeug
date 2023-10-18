import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AjsModule } from '../../angularjs';

import { AppComponent } from './app.component';

import { ServiceBootstrapComponent } from './service.bootstrap.component';

import { AppDemoComponent } from './app.demo.component';
import { UserService } from '../user/user.service';
import { UpgradeModule } from '@angular/upgrade/static';
import { RootComponent } from './root.component';
import { AppRoutingModule } from './app.routing.module';
import { AnalyticsComponent } from './analytics/analytics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnalyticsModule } from './analytics/analytics.module';
@NgModule({
  imports: [BrowserModule, AjsModule, AppRoutingModule, AnalyticsModule],
  declarations: [
    ServiceBootstrapComponent,
    AppComponent,
    RootComponent,
    PageNotFoundComponent,
  ],
  providers: [UserService],
  entryComponents: [ServiceBootstrapComponent, AppComponent],
  bootstrap: [RootComponent],
})
export class AppModule {
  ngDoBootstrap() {}
}
