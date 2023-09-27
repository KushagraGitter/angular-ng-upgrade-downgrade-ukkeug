import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from '../user/user.service';
import { AppDemoComponent } from './app.demo.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppDemoComponent],
  providers: [UserService],
  entryComponents: [AppDemoComponent],
})
export class AppSecondModule {
  ngDoBootstrap() {}
}
