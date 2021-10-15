import { Component, Input, OnInit } from '@angular/core';
import { RequestFunctionsService } from 'src/app/services/request-functions.service';

@Component({
  selector: 'app-key-statics-one',
  templateUrl: './key-statics-one.component.html',
  styleUrls: ['./key-statics-one.component.css']
})
export class KeyStaticsOneComponent implements OnInit {

  constructor(private requests: RequestFunctionsService) { }


  // @Input() data : any;
  data: any;


  PE: any;
  PB: any;
  PS: any;
  enterprise_value_to_sales: any;
  ebitda_per_share: any;
  enterprise_value_to_pretax_income: any;
  enterprise_value_to_fcf: any;
  roa_median: any;
  roe_median: any;
  roic_median: any;
  revenue_cagr_10: any;
  total_assets_cagr_10: any;
  fcf_cagr_10: any;
  eps_diluted_cagr_10: any;
  gross_margin_median: any;
  pretax_margin_median: any;
  fcf_margin_median: any;
  debt_to_assets_median: any;
  debt_to_equity_median: any;
  assets_to_equity_median: any;
  enterprise_value_to_earnings: any;
  isPageLoaded: boolean = false;


  ngOnInit(): void {

    // this.requests.getCompanyData().subscribe(res => {
    this.data = '';
    this.data = JSON.parse(localStorage.responseData);
      if(!this.data) return;
      this.PE = this.data.price_to_earnings.splice(-1)[0];
      this.PB = this.data.price_to_book.splice(-1)[0];
      this.PS = this.data.price_to_sales.splice(-1)[0];
      this.enterprise_value_to_earnings = this.data.enterprise_value_to_earnings.splice(-1)[0];
      this.enterprise_value_to_sales = this.data.enterprise_value_to_sales.splice(-1)[0];
      this.ebitda_per_share = this.data.ebitda_per_share.splice(-1);
      this.enterprise_value_to_pretax_income = this.data.enterprise_value_to_pretax_income.splice(-1)[0];
      this.enterprise_value_to_fcf = this.data.enterprise_value_to_fcf.splice(-1);
      this.roa_median = this.data.roa_median;
      this.roe_median = this.data.roe_median;
      this.roic_median = this.data.roic_median;
      this.revenue_cagr_10 = this.data.revenue_cagr_10.splice(-1);
      this.total_assets_cagr_10 = this.data.total_assets_cagr_10.splice(-1);
      this.fcf_cagr_10 = this.data.fcf_cagr_10.splice(-1);
      this.eps_diluted_cagr_10 = this.data.eps_diluted_cagr_10.splice(-1);
      this.gross_margin_median = this.data.gross_margin_median;
      this.pretax_margin_median = this.data.pretax_margin_median;
      this.fcf_margin_median = this.data.fcf_margin_median;
      this.assets_to_equity_median = this.data.assets_to_equity_median;
      this.debt_to_equity_median = this.data.debt_to_equity_median;
      this.debt_to_assets_median = this.data.debt_to_assets_median;
      this.isPageLoaded = true;
    // })

  }

}
