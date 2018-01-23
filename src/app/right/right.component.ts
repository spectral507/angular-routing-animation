import { Component, ElementRef } from '@angular/core';
import { AnimatedRouteComponent } from '../shared/animated-route/animated-route.component';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent extends AnimatedRouteComponent {

  constructor(host: ElementRef) {
    super(host);
  }
}
