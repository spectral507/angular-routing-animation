import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimatedRouteComponent } from './shared/animated-route/animated-route.component';
import { getRoutingTrigger } from '../animations/routing.trigger';
import { Observable } from 'rxjs/Observable';
import { AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [getRoutingTrigger()]
})
export class AppComponent {

  outletContainerHeight: string = 'auto';
  routingTransitionsCount: number = 0;

  private _activatedComponent: AnimatedRouteComponent;

  constructor(private _cd: ChangeDetectorRef) { }

  getRoutingState(outlet: RouterOutlet): string {
    return outlet.activatedRouteData.state;
  }

  onActivate(component: AnimatedRouteComponent): void {
    let height: string | Observable<string>;
    if (this._activatedComponent) {
      height = this._activatedComponent.getHeight();
      if (typeof height === 'string') {
        this.outletContainerHeight = height;
      }
    }
    else {
      this.outletContainerHeight = '0px';
    }
    this._activatedComponent = component;
    this._cd.detectChanges();
    height = component.getHeight();
    if (typeof height === 'string') {
      this.outletContainerHeight = height;
      //this._cd.detectChanges();
    }
    else {
      height.subscribe((height: string) => {
        if (this._activatedComponent == component) {
          this.outletContainerHeight = height;
          //this._cd.detectChanges();
        }
      });
    }
  }

  onRoutingStart() {
    this.routingTransitionsCount++;
  }

  onRoutingDone() {
    this.routingTransitionsCount--;
    if (this.routingTransitionsCount == 0) {
      this.outletContainerHeight = 'auto';
    }
  }
}
