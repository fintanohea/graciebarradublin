import { Component, AfterViewInit, ViewChild, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: [ './homepage.component.scss' ]
})
export class HomepageComponent implements AfterViewInit {
  @ViewChild('home') home: ElementRef;
  @ViewChild('about') about: ElementRef;
  @ViewChild('instructor') instructor: ElementRef;
  @ViewChild('programs') programs: ElementRef;
  @ViewChild('pricing') pricing: ElementRef;
  @ViewChild('map') map: ElementRef;
  selectedNav: ElementRef;
  navSections: Array<ElementRef>;

  constructor() { }

  ngAfterViewInit() {
    this.navSections = [
      this.home,
      this.about,
      this.instructor,
      this.programs,
      this.pricing,
      this.map
    ]

    this.selectedNav = this.home.nativeElement;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
   this.redrawDotNav();
  }

  scroll(el) {
    const scrollTo = el.offsetTop - 56;
    this.selectedNav = el;

    window.scrollTo({
      top: scrollTo,
      left: 0,
      behavior: 'smooth'
    });
  }

  redrawDotNav() {
    const windowPosition = window.pageYOffset;
    let section1Pos;
    let section2Pos;

    for ( let x = 0; x < this.navSections.length; x++ ) {
      if ( x != this.navSections.length-1 ) {
        section1Pos = this.navSections[x].nativeElement.offsetTop - 56;
        section2Pos = this.navSections[x+1].nativeElement.offsetTop - 56;

        if ( windowPosition >= section1Pos && windowPosition < section2Pos ) {
          this.selectedNav = this.navSections[x].nativeElement;
        }
      } else {
        if ( windowPosition >= section2Pos ) {
          this.selectedNav = this.navSections[x].nativeElement;
        }
      } 
    }
  }

}
