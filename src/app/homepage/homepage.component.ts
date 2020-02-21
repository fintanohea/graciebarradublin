import { Component, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: [ './homepage.component.scss' ]
})
export class HomepageComponent implements AfterViewInit {
  @ViewChild('map', {static: false}) map: HTMLElement;

  constructor() { }

  ngAfterViewInit() {
  }

  scroll(el: HTMLElement) {
    const scrollTo = el.offsetTop - 91;

    window.scrollTo({
      top: scrollTo,
      left: 0,
      behavior: 'smooth'
    });
  }
}
