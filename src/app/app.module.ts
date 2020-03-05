import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { HomepageComponent }   from './homepage/homepage.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { AboutComponent }      from './about/about.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { MapComponent } from './map/map.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { InstructorComponent } from './instructor/instructor.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProgramsComponent } from './programs/programs.component';
import { PriceCardComponent } from './price-card/price-card.component';
import { ProgramsDetailedComponent } from './programs-detailed/programs-detailed.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() 
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    HeroesComponent,
    AboutComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    ContactDetailsComponent,
    MapComponent,
    PricingComponent,
    ContactFormComponent,
    InstructorComponent,
    NavMenuComponent,
    ProgramsComponent,
    PriceCardComponent,
    ProgramsDetailedComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
