import angular from 'angular';
import 'angular-route';

import {
  downgradedAngularAppModule,
  downgradedAngularSecondAppModule,
  UserService,
} from '../../angular';

import { angularjsUserModule } from '../user/user.module.ajs';

import { configRoutes } from './app.routes.config.ajs';
import { ajsAppComponent } from './app.component.ajs';
import { ajsSecondAppComponent } from './app.component.second.ajs';
import { ajsAppServiceFactory } from './app.service.ajs';
import { ngAppComponent } from './ng.app.component.ajs';
import {
  downgradeComponent,
  downgradeInjectable,
} from '@angular/upgrade/static';
import { AppComponent } from '../../angular/app/app.component';
import { ServiceBootstrapComponent } from '../../angular/app/service.bootstrap.component';
import { AppDemoComponent } from '../../angular/app/app.demo.component';
import { AnalyticsComponent } from '../../angular/app/analytics/analytics.component';
export const angularjsAppModule = 'ajs-app-module';
console.log('downgraded Mod', downgradedAngularAppModule);
const donwgradeMod1 = downgradedAngularAppModule.bootstrap();
const donwgradeMod2 = downgradedAngularSecondAppModule.bootstrap();

const mod = angular
  .module(angularjsAppModule, [
    // vendor
    'ngRoute',
    // app
    angularjsUserModule,
    // downgrade
  ])
  // force Angular initialization so that we can use Angular injectables in Angular JS

  .config(configRoutes)
  .factory(...ajsAppServiceFactory)
  .component(...ngAppComponent);
mod.component(...ajsAppComponent);
mod.component(...ajsSecondAppComponent);

mod
  .factory('userService', downgradeInjectable(UserService, donwgradeMod1))
  .directive(
    'app',
    downgradeComponent({
      component: AppComponent,
      downgradedModule: donwgradeMod1,
    })
  )
  .directive(
    'serviceBootstrap',
    downgradeComponent({
      component: ServiceBootstrapComponent,
      downgradedModule: donwgradeMod1,
    })
  )
  .directive(
    'appDemo',
    downgradeComponent({
      component: AppDemoComponent,
      downgradedModule: donwgradeMod2,
    })
  )
  .directive(
    'ajAnalytics',
    downgradeComponent({
      component: AnalyticsComponent,
      downgradedModule: donwgradeMod2,
    })
  );
console.log(mod);
console.log('angularJs mod creation');
mod.requires.push(donwgradeMod1);
mod.requires.push(donwgradeMod2);

console.log(mod);
