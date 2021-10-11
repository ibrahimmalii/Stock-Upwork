import { Component, Input, OnInit } from '@angular/core';
import { RequestFunctionsService } from 'src/app/services/request-functions.service';

@Component({
  selector: 'app-key-statics',
  templateUrl: './key-statics.component.html',
  styleUrls: ['./key-statics.component.css']
})
export class KeyStaticsComponent implements OnInit {

  constructor(private requests: RequestFunctionsService) { }

  // @Input() data : any;
  data: any;

  revenue: any;
  revenue_growth: any;
  gross_profit: any;
  gross_margin: any;
  operating_income: any;
  operating_margin: any;
  eps_diluted_growth: any;
  dividends_annual: any;
  roa: any;
  roe: any;
  roic: any;
  eps_diluted: any;
  dividends_per_share_growth: any;
  isPageLoaded: any;

  splicedArray(arr: any) {
    return arr.splice(-11);
  }


  ngOnInit(): void {


    // this.requests.getCompanyData().subscribe(res => {
      this.data = '';
    this.data = JSON.parse(localStorage.responseData);
      this.revenue = this.splicedArray(this.data.revenue);
      this.revenue_growth = this.splicedArray(this.data.revenue_growth);
      this.gross_profit = this.splicedArray(this.data.gross_profit);
      this.gross_margin = this.splicedArray(this.data.gross_margin);
      this.operating_income = this.splicedArray(this.data.operating_income);
      this.operating_margin = this.splicedArray(this.data.operating_margin);
      this.eps_diluted = this.splicedArray(this.data.eps_diluted)
      this.eps_diluted_growth = this.splicedArray(this.data.eps_diluted_growth);
      this.dividends_annual = this.splicedArray(this.data.dividends_annual);
      this.dividends_per_share_growth = this.splicedArray(this.data.dividends_per_share_growth)
      this.roa = this.splicedArray(this.data.roa);
      this.roe = this.splicedArray(this.data.roe);
      this.roic = this.splicedArray(this.data.roic);
      this.isPageLoaded = true;
    // });
  };


}
