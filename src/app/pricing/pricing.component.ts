import { Component, OnInit, Input } from '@angular/core';
import { PriceCard } from '../models/price-card.model';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: [ './pricing.component.scss' ]
})
export class PricingComponent implements OnInit {
  public adultcard: PriceCard = {
    title: "Adults",
    curreny: "€",
    price: "100",
    frequency: "mo",
    details: ["details 1", "details 2"],
    button: "More Details"
  };

  public studentcard: PriceCard = {
    title: "Students",
    curreny: "€",
    price: "75",
    frequency: "mo",
    details: ["details 1", "details 2"],
    button: "More Details"
  };

  public juvenilecard: PriceCard = {
    title: "Juvenile",
    curreny: "€",
    price: "60",
    frequency: "mo",
    details: ["16-18 yrs (ID required)"],
    button: "More Details"
  };

  public kidsteenscard: PriceCard = {
    title: "Kids / Teens",
    curreny: "€",
    price: "55",
    frequency: "mo",
    details: ["details 1", "details 2"],
    button: "More Details"
  };

  public ladiescard: PriceCard = {
    title: "Ladies Self Defence",
    curreny: "€",
    price: "70",
    frequency: "mo",
    details: ["entitles the holder to entry to twice weekly ladies only classes and any morning afternoon or weekend GB1 classes"],
    button: "More Details"
  };

  public yogacard: PriceCard = {
    title: "Yoga Lab Membership",
    curreny: "€",
    price: "50",
    frequency: "mo",
    details: [],
    button: "More Details"
  };

  public combocard: PriceCard = {
    title: "Combined Yoga Lab and GB membership",
    curreny: "€",
    price: "119",
    frequency: "mo",
    details: [],
    button: "More Details"
  };

  

  public pricecards: Array<PriceCard> = [
    this.adultcard,
    this.studentcard,
    this.juvenilecard,
    this.kidsteenscard,
    this.yogacard,
    this.combocard,
    this.ladiescard,
  ];

  constructor(
  ) {}

  ngOnInit(): void {
  }

  

}
