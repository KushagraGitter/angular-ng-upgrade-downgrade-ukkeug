import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UserService } from '../../user/user.service';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RootComponent } from '../root.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  declarations: [RootComponent, PageNotFoundComponent],
  providers: [UserService],
  bootstrap: [RootComponent],
})
export class RootModdule {
  //ngDoBootstrap() {}
}
