import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor() { }
  arrayOfInputs = [];

  ngOnInit(): void {
    this.arrayOfInputs.length = 6;
  }


}
