import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'root.component.html',
})
export class RootComponent {
  constructor() {
    console.log('Root component executed');
  }
}
