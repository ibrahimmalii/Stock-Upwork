import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-statics',
  templateUrl: './key-statics.component.html',
  styleUrls: ['./key-statics.component.css']
})
export class KeyStaticsComponent implements OnInit {

  constructor() { }

  @Input() data : any;

  revenue : any;
  revenue_growth : any;
  gross_profit : any;
  gross_margin : any;
  operating_income : any;
  operating_margin : any;
  eps_diluted_growth : any;
  dividends : any;
  roa : any;
  roe : any;
  roic : any;



  ngOnInit(): void {
    this.revenue = this.data.data.financials.quarterly.revenue.splice(0,10);
    this.revenue_growth = this.data.data.financials.quarterly.revenue_growth.splice(0,10);
    this.gross_profit = this.data.data.financials.annual.gross_profit.splice(0,10);
    this.gross_margin = this.data.data.financials.annual.gross_margin.splice(0,10);
    this.operating_income = this.data.data.financials.annual.operating_income.splice(0,10);
    this.operating_margin = this.data.data.financials.quarterly.operating_margin.splice(0,10);
    this.eps_diluted_growth = this.data.data.financials.quarterly.eps_diluted_growth.splice(0,10);
    this.dividends = this.data.data.financials.quarterly.dividends.splice(0,10);
    this.roa = this.data.data.financials.annual.roa.splice(0,10);
    this.roe = this.data.data.financials.annual.roe.splice(0,10);
    this.roic = this.data.data.financials.annual.roic.splice(0,10);

  }



}
