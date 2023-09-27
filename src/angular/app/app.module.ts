import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AjsModule } from '../../angularjs';

import { AppComponent } from './app.component';

import { ServiceBootstrapComponent } from './service.bootstrap.component';

import { AppDemoComponent } from './app.demo.component';
import { UserService } from '../user/user.service';
import { UpgradeModule } from '@angular/upgrade/static';
@NgModule({
  imports: [BrowserModule],
  declarations: [ServiceBootstrapComponent],
  providers: [UserService],
  entryComponents: [ServiceBootstrapComponent],
})
export class AppModule {
  ngDoBootstrap() {}
}
