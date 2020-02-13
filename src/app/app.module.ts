import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data-service/in-memory-data.service';

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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
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
    InstructorComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
