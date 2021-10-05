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
  operating_income_per_share : any
  pretax_income_per_share: any
  revenueRatio:any
  dividends:any
  dividendsFixed:any
  deptToEquity:any
  deptToEquityFixed:any
  total_revenue :any

  oparator(op:any , arr:any){
      return eval(arr.join(op)).toFixed(2)+'%'
  }

  ngOnInit(): void {
    this.PE = this.data.price_to_earnings.splice(-1)[0];
    this.PS = this.data.price_to_sales.splice(-1)[0];
    this.operatingMargin =this.oparator ( '+' , this.data.operating_margin);
    this.netIncomeMargin =this.oparator( '+' ,this.data.net_income_margin);
    this.totalAssets =this.oparator( '+' ,this.data.total_current_assets);
    this.totalLibilites =this.oparator( '+' ,this.data.total_current_liabilities);
    this.roce =this.oparator( '+' ,this.data.roce);
    this.flowPerShare =this.oparator( '+' ,this.data.fcf_per_share);
    this.marketCap =this.oparator( '+' ,this.data.market_cap);
    this.operating_income_per_share =this.oparator( '+' ,this.data.operating_income_per_share);
    this.pretax_income_per_share =this.oparator( '+' ,this.data.pretax_income_per_share);
    this.dividends =this.oparator( '+' ,this.data.dividends);
    this.deptToEquity =this.oparator( '+' ,this.data.debt_to_equity);
    this.deptToEquityFixed = (parseInt(this.deptToEquity))/100
    this.revenueRatio = (parseInt(this.pretax_income_per_share) - parseInt(this.operating_income_per_share))
    this.dividendsFixed = ((parseInt(this.dividends) / 100))+'%'
    // console.log(this.deptToEquity)
    this.total = (parseInt(this.totalAssets) /parseInt (this.totalLibilites)).toFixed(1)
    this.revenueGrowth =(this.data.revenue_growth).splice(-2)
    this.calculater = (((this.revenueGrowth[1] - this.revenueGrowth[0])/this.revenueGrowth[0])*100).toFixed(0)+'%'
    this.roeMedian =((this.data.roe_median)*100).toFixed(0) +'%'
    this.roceFixed =(parseInt(this.roce).toFixed(0)+'%')
    this.flowPerShareFixed =(parseInt(this.flowPerShare).toFixed(0)+'%')
    this.marketCapFixed = ((parseInt(this.marketCap))/1000000).toFixed(0) +'$'
    this.industry = this.data.industry
    this.currency = this.data.currency
    // console.log(this.data.ebitda_per_share)
    // this.revenue_per_share = this.data.revenue_per_share.splice(-1)[0];
    // this.ebitda_per_share = this.data.ebitda_per_share.splice(-1)[0];
  }




}
