import { AfterViewInit, Component, ElementRef, HostBinding } from '@angular/core';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-animated-route',
  templateUrl: './animated-route.component.html',
  styleUrls: ['./animated-route.component.css']
})
export class AnimatedRouteComponent implements AfterViewInit {

  @HostBinding('class.d-block') hostBlock: boolean = true;
  @HostBinding('style.border') hostBorder: string = '2px solid pink';

  private _hostHeight: AsyncSubject<string> = null;
  private _viewInit: boolean = false;

  constructor(protected _host: ElementRef) { }

  ngAfterViewInit(): void {
    this._viewInit = true;
    if (this._hostHeight) {
      this._hostHeight.next(this.getOuterHeight(this._host.nativeElement));
      this._hostHeight.complete();
    }
  }

  getHeight(): string | Observable<string> {
    if (this._viewInit) {
      return this.getOuterHeight(this._host.nativeElement);
    }
    else {
      if (!this._hostHeight) {
        this._hostHeight = new AsyncSubject<string>();
      }
      return this._hostHeight;
    }
  }

  private getOuterHeight(elem: HTMLElement): string {
    let elemHeight: number, elemMargin: number;
    elemHeight = parseInt(document.defaultView.getComputedStyle(elem, '').getPropertyValue('height'));
    elemMargin = parseInt(document.defaultView.getComputedStyle(elem, '').getPropertyValue('margin-top'))
      + parseInt(document.defaultView.getComputedStyle(elem, '').getPropertyValue('margin-bottom'));
    return `${elemHeight + elemMargin}px`;
  }
}
