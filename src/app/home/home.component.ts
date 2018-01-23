import { Component, ElementRef } from '@angular/core';
import { AnimatedRouteComponent } from '../shared/animated-route/animated-route.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends AnimatedRouteComponent {

  constructor(host: ElementRef) {
    super(host);
  }
}
