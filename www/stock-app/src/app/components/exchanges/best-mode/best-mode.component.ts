import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-mode',
  templateUrl: './best-mode.component.html',
  styleUrls: ['./best-mode.component.css']
})
export class BestModeComponent implements OnInit {

  constructor() {

  }

  @Input() data : any;
  PE : any;
  PS : any;
  maps:any;
  collect:any;
  fixed:any;
  dataQuart : any;
  operatingMargin :any
  netIncomeMargin :any
  totalLibilites :any
  totalAssets :any
  total :any
  revenueGrowth : any
  calculater :any
  roeMedian :any
  roce : any
  roceFixed:any
  flowPerShare:any
  flowPerShareFixed:any
  price:any
  marketCap:any
  marketCapFixed:any
  industry :any
  currency:any
  revenue_per_share : any;
  ebitda_per_share : any;

  oparator(op:any , arr:any){
      return eval(arr.join(op)).toFixed(2)+'%'
  }

  ngOnInit(): void {
    this.PE = this.data.data.financials.annual.price_to_earnings.splice(-1)[0];
    this.PS = this.data.data.financials.annual.price_to_sales.splice(-1)[0];
    this.operatingMargin =this.oparator ( '+' , this.data.data.financials.quarterly.operating_margin);
    this.netIncomeMargin =this.oparator( '+' ,this.data.data.financials.quarterly.net_income_margin);
    this.totalAssets =this.oparator( '+' ,this.data.data.financials.quarterly.total_current_assets);
    this.totalLibilites =this.oparator( '+' ,this.data.data.financials.quarterly.total_current_liabilities);
    this.roce =this.oparator( '+' ,this.data.data.financials.quarterly.roce);
    this.flowPerShare =this.oparator( '+' ,this.data.data.financials.quarterly.fcf_per_share);
    this.marketCap =this.oparator( '+' ,this.data.data.financials.quarterly.market_cap);
    // this.price =this.oparator( '+' ,this.data.data.financials.quarterly. price_to_earnings);
    this.total = (parseInt(this.totalAssets) /parseInt (this.totalLibilites)).toFixed(1)
    this.revenueGrowth =(this.data.data.financials.quarterly.revenue_growth).splice(-2)
    this.calculater = (((this.revenueGrowth[1] - this.revenueGrowth[0])/this.revenueGrowth[0])*100).toFixed(0)+'%'
    this.roeMedian =((this.data.data.financials.quarterly.roe_median)*100).toFixed(0) +'%'
    this.roceFixed =(parseInt(this.roce).toFixed(0)+'%')
    this.flowPerShareFixed =(parseInt(this.flowPerShare).toFixed(0)+'%')
    this.marketCapFixed = ((parseInt(this.marketCap))/1000000).toFixed(0) +'$'
    this.industry = this.data.data.metadata. industry
    this.currency = this.data.data.metadata. currency
    this.revenue_per_share = this.data.data.financials.annual.revenue_per_share.splice(-1)[0];
    this.ebitda_per_share = this.data.data.financials.annual.ebitda_per_share.splice(-1)[0];
  }




}
