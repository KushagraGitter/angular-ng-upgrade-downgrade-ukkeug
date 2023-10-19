import { NgModule } from '@angular/core';
import { AjsModule } from '../../../angularjs';
import { UserService } from '../../user/user.service';
import { AppComponent } from '../app.component';
import { ServiceBootstrapComponent } from '../service.bootstrap.component';

@NgModule({
  imports: [AjsModule],
  declarations: [ServiceBootstrapComponent, AppComponent],
  providers: [UserService],
  entryComponents: [ServiceBootstrapComponent, AppComponent],
  bootstrap: [],
})
export class AppModule {
  //ngDoBootstrap() {}
}
