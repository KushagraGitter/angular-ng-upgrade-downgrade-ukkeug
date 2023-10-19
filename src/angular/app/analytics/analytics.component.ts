import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-analytics',
  templateUrl: 'analytics.component.html',
})
export class AnalyticsComponent {
  constructor(private readonly userService: UserService) {
    console.log('Analytics mod', userService.getUser());
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
