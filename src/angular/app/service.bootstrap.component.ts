import { OnInit } from '@angular/core';
import { Component, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'service-bootstrap',
  template: 'service-bootstrap Hello',
})
export class ServiceBootstrapComponent implements AfterViewInit {
  @Output()
  public isInitialized: EventEmitter<void> = new EventEmitter();

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    this.isInitialized.emit();
  }
}
