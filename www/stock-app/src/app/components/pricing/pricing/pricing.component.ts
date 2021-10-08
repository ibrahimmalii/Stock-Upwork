import { Component, OnInit } from '@angular/core';
import { RequestFunctionsService } from './../../../services/request-functions.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor(private requests : RequestFunctionsService) {}
  industry:any;
  data : any;
  sector:any;
  exchange:any;
  marketCap:any;
  marketCapFixed:any;
  enterprise:any;
  enterpriseFixed:any;
  PE:any;
  PS:any

  oparator(op:any , arr:any){
        return eval(arr.join(op)).toFixed(2)+'%'
    }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.responseData);
    this.industry = this.data.industry
    this.sector = this.data.sector
    this.exchange = this.data.exchange
    this.marketCap =this.oparator( '+' ,this.data.market_cap)
    this.enterprise =this.oparator( '+' ,this.data.enterprise_value)
    this.marketCapFixed = ((parseInt(this.marketCap))/1000000).toFixed(0) +'$'
    this.enterpriseFixed = ((parseInt(this.enterprise))/1000000).toFixed(0) +'$'
    this.PE = this.data.price_to_earnings.splice(-1)[0];
    this.PS = this.data.price_to_sales.splice(-1)[0];
   
    
  }

status: boolean = false;
getData(searchKey: string){
  this.data = this.requests.getData(searchKey);
  console.log(this.data);
  this.status = true; 
}

statusOne: boolean = false;
getDataOne(searchKey: string){
  this.data = this.requests.getData(searchKey);
  this.statusOne =true; 
}


}
