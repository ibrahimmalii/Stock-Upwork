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
  eps_diluted : any;
  dividends_per_share_growth : any;

  splicedArray(arr:any){
    return arr.splice(-11);
  }


  ngOnInit(): void {
    this.revenue = this.splicedArray(this.data.revenue);
    this.revenue_growth = this.splicedArray(this.data.revenue_growth);
    this.gross_profit = this.splicedArray(this.data.gross_profit);
    this.gross_margin = this.splicedArray(this.data.gross_margin);
    this.operating_income = this.splicedArray(this.data.operating_income);
    this.operating_margin = this.splicedArray(this.data.operating_margin);
    this.eps_diluted = this.splicedArray(this.data.eps_diluted)
    this.eps_diluted_growth = this.splicedArray(this.data.eps_diluted_growth);
    this.dividends = this.splicedArray(this.data.dividends);
    this.dividends_per_share_growth = this.splicedArray(this.data.dividends_per_share_growth)
    this.roa = this.splicedArray(this.data.roa);
    this.roe = this.splicedArray(this.data.roe);
    this.roic = this.splicedArray(this.data.roic);
  }

}
