import angular from 'angular';
import { StaticProvider } from '@angular/core';
import { downgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AppSecondModule } from './app/app.second.module';

const boostrapAppModule = (extraProviders: StaticProvider[]) => {
  const platformRef = platformBrowserDynamic(extraProviders);
  console.log('platformRef', platformRef);
  return platformRef.bootstrapModule(AppModule);
};

const boostrapAppSecondModule = (extraProviders: StaticProvider[]) => {
  const platformRef = platformBrowserDynamic(extraProviders);
  console.log('platformRef', platformRef);
  return platformRef.bootstrapModule(AppSecondModule);
};

export class downgradedAngularAppModule {
  public static bootstrap() {
    const donwgradedMod = downgradeModule(boostrapAppModule);
    return donwgradedMod;
  }
}

export class downgradedAngularSecondAppModule {
  public static bootstrap() {
    const donwgradedMod = downgradeModule(boostrapAppSecondModule);
    return donwgradedMod;
  }
}

// export const downgradedAngularAppModule {

//   return function test(){

//   };

// }

console.log('downgrade mod creation');
// Register all Angular items which should be usable in the Angular JS part of the application
// This is the only place of the registration and keeps the Angular impl clear from Angular JS syntax

// agMod.directive(
//   'service-bootstrap',
//   downgradeComponent({
//     component: ServiceBootstrapComponent,
//     propagateDigest: false,
//   })
// );

// Re-export every item from Angular application which will be used in the Angular JS part
// The Angular JS part the can use it like this: import { UserService, User } from '../../angular';
export * from './user/user.service';
