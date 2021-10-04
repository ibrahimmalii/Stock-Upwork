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

  splicedArray(arr:any){
    return arr.splice(0,10);
  }


  ngOnInit(): void {
    this.revenue = this.splicedArray(this.data.data.financials.quarterly.revenue);
    this.revenue_growth = this.splicedArray(this.data.data.financials.quarterly.revenue_growth);
    this.gross_profit = this.splicedArray(this.data.data.financials.annual.gross_profit);
    this.gross_margin = this.splicedArray(this.data.data.financials.annual.gross_margin);
    this.operating_income = this.splicedArray(this.data.data.financials.annual.operating_income);
    this.operating_margin = this.splicedArray(this.data.data.financials.quarterly.operating_margin);
    this.eps_diluted_growth = this.splicedArray(this.data.data.financials.quarterly.eps_diluted_growth);
    this.dividends = this.splicedArray(this.data.data.financials.quarterly.dividends);
    this.roa = this.splicedArray(this.data.data.financials.annual.roa);
    this.roe = this.splicedArray(this.data.data.financials.annual.roe);
    this.roic = this.splicedArray(this.data.data.financials.annual.roic);

  }



}
