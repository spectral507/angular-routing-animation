import { Component, ElementRef } from '@angular/core';
import { AnimatedRouteComponent } from '../shared/animated-route/animated-route.component';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent extends AnimatedRouteComponent {

  constructor(host: ElementRef) {
    super(host);
  }
}
