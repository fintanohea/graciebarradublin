import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { AboutComponent }      from './about/about.component';
import { HomepageComponent }   from './homepage/homepage.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { PricingComponent }      from './pricing/pricing.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact-details', component: ContactDetailsComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
