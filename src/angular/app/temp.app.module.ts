import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnalyticsModule } from './analytics/analytics.module';
import { AppRoutingModule } from './app.routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RootComponent } from './root.component';

@NgModule({
  imports: [AppRoutingModule, AnalyticsModule, RouterModule],
  declarations: [RootComponent, PageNotFoundComponent],
  entryComponents: [RootComponent],
})
export class TempAppModule {}
