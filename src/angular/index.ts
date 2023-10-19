import angular from 'angular';
import { Compiler, Injector, StaticProvider } from '@angular/core';
import { downgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/modules/app.module';
import { RootModdule } from './app/modules/root.module';
import { AppSecondModule } from './app/modules/app.second.module';

let rootInjectorPromise: Promise<Injector> | null = null;
const getRootInjector = (extraProviders: StaticProvider[]) => {
  if (!rootInjectorPromise) {
    rootInjectorPromise = platformBrowserDynamic(extraProviders)
      .bootstrapModule(RootModdule)
      .then((moduleRef) => moduleRef.injector);
  }
  return rootInjectorPromise;
};

const boostrapAppModule = downgradeModule(
  async (extraProviders: StaticProvider[]) => {
    const start = performance.now();
    const rootInjector = await getRootInjector(extraProviders);
    const moduleAFactory = await rootInjector
      .get(Compiler)
      .compileModuleAsync(AppModule);
    const end = performance.now();
    //tslint:disable-next-line:no-console
    console.log(`Execution time downgradedNg2AModule1: ${end - start} ms`);
    return moduleAFactory.create(rootInjector);
  }
);

const boostrapAppSecondModule = downgradeModule(
  async (extraProviders: StaticProvider[]) => {
    const start = performance.now();
    const rootInjector = await getRootInjector(extraProviders);
    const moduleAFactory = await rootInjector
      .get(Compiler)
      .compileModuleAsync(AppSecondModule);
    const end = performance.now();
    //tslint:disable-next-line:no-console
    console.log(`Execution time downgradedNg2AModule1: ${end - start} ms`);
    return moduleAFactory.create(rootInjector);
  }
);

export class downgradedAngularAppModule {
  public static bootstrap() {
    const donwgradedMod = boostrapAppModule;
    return donwgradedMod;
  }
}

export class downgradedAngularSecondAppModule {
  public static bootstrap() {
    const donwgradedMod = boostrapAppSecondModule;
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
