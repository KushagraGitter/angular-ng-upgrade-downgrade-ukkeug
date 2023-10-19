import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'angularjs',
    loadChildren: () =>
      import('./analytics/analytics.module').then((importedModule) => {
        console.log(importedModule);
        return importedModule.AnalyticsModule;
      }),
    //component: AnalyticsComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
