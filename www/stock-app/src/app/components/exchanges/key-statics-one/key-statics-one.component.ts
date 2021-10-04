import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-statics-one',
  templateUrl: './key-statics-one.component.html',
  styleUrls: ['./key-statics-one.component.css']
})
export class KeyStaticsOneComponent implements OnInit {

  constructor() { }


  @Input() data : any;

  PE : any;
  PB : any;
  PS : any;
  enterprise_value_to_sales : any;
  ebitda_per_share : any;
  enterprise_value_to_pretax_income : any;
  enterprise_value_to_fcf : any;
  roa_median : any;
  roe_median : any;
  roic_median : any;
  revenue_cagr_10 : any;
  total_assets_cagr_10 : any;
  fcf_cagr_10 : any;
  eps_diluted_cagr_10 : any;
  gross_margin_median : any;
  pretax_margin_median : any;
  fcf_margin_median : any;
  debt_to_assets_median :any;
  debt_to_equity_median : any;
  assets_to_equity_median : any;


  ngOnInit(): void {
    this.PE = this.data.data.financials.annual.price_to_earnings.splice(-1);
    this.PB = this.data.data.financials.annual.price_to_book.splice(-1);
    this.PS = this.data.data.financials.annual.price_to_sales.splice(-1);
    this.enterprise_value_to_sales = this.data.data.financials.annual.enterprise_value_to_sales.splice(-1);
    this.ebitda_per_share = this.data.data.financials.annual.ebitda_per_share.splice(-1);
    this.enterprise_value_to_pretax_income = this.data.data.financials.annual.enterprise_value_to_pretax_income.splice(-1);
    this.enterprise_value_to_fcf = this.data.data.financials.annual.enterprise_value_to_fcf.splice(-1);
    this.roa_median = this.data.data.financials.annual.roa_median;
    this.roe_median = this.data.data.financials.annual.roe_median;
    this.roic_median = this.data.data.financials.annual.roic_median;
    this.revenue_cagr_10 = this.data.data.financials.annual.revenue_cagr_10.splice(-1);
    this.total_assets_cagr_10 = this.data.data.financials.annual.total_assets_cagr_10.splice(-1);
    this.fcf_cagr_10 = this.data.data.financials.annual.fcf_cagr_10.splice(-1);
    this.eps_diluted_cagr_10 = this.data.data.financials.annual.eps_diluted_cagr_10.splice(-1);
    this.gross_margin_median = this.data.data.financials.quarterly.gross_margin_median;
    this.pretax_margin_median = this.data.data.financials.quarterly.pretax_margin_median;
    this.fcf_margin_median = this.data.data.financials.quarterly.fcf_margin_median;
    this.assets_to_equity_median = this.data.data.financials.quarterly.assets_to_equity_median;
    this.debt_to_equity_median = this.data.data.financials.quarterly.debt_to_equity_median;
    this.debt_to_assets_median = this.data.data.financials.quarterly.debt_to_assets_median;

  }

}
