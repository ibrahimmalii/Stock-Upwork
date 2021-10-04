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
  maps:any;
  collect:any;
  fixed:any;
  dataQuart : any;
  operatingMargin :any
  netIncomeMargin :any
  oparator(op:any , arr:any){
      return eval(arr.join(op)).toFixed(2)+'%'
  }

  ngOnInit(): void {
    this.operatingMargin =this.oparator ( '+' , this.data.data.financials.quarterly.operating_margin);
    this.netIncomeMargin =this.oparator( '+' ,this.data.data.financials.quarterly.net_income_margin);
  }
  



}