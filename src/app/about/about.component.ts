import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module'
import { Hero }         from '../modals/hero';
import { HeroService }  from '../services/hero-service/hero.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [ './about.component.scss' ]
})
export class AboutComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

//   getHero(): void {
//     const id = +this.route.snapshot.paramMap.get('id');
//     this.heroService.getHero(id)
//       .subscribe(hero => this.hero = hero);
//   }

//   goBack(): void {
//     this.location.back();
//   }

//  save(): void {
//     this.heroService.updateHero(this.hero)
//       .subscribe(() => this.goBack());
//   }
}
