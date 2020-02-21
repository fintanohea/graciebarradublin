import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll(el: HTMLElement) {
    const scrollTo = el.offsetTop - 56;

    window.scrollTo({
      top: scrollTo,
      left: 0,
      behavior: 'smooth'
    });
  }
}
