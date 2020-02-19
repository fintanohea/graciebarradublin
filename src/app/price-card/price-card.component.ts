import { Component, OnInit, Input } from '@angular/core';
import { PriceCard } from '../models/price-card.model';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.scss']
})
export class PriceCardComponent implements OnInit {
  @Input() pricecard:PriceCard;

  constructor() { }

  ngOnInit() {
  }


}
