import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppLabelComponent } from './label.component';

@NgModule({
  imports: [],
  declarations: [AppLabelComponent],
  // entryComponents: [AnalyticsComponent],
  exports: [AppLabelComponent],
})
export class AppCommonModule {
  constructor() {}
}
