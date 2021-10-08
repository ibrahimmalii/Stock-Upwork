import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { RequestFunctionsService } from 'src/app/services/request-functions.service';
import { MainFilterationComponent } from '../../filter-companies/main-filteration/main-filteration.component';

@Component({
  selector: 'app-key-statics-one',
  templateUrl: './key-statics-one.component.html',
  styleUrls: ['./key-statics-one.component.css']
})

export class KeyStaticsOneComponent implements OnInit {

  constructor(private requests: RequestFunctionsService, private http : HttpClient) { }


  // @Input() firstTable : any;
  firstTable : any;



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

    this.http.get(`http://localhost:8000/api/keyStatistics/FB`).subscribe(res => {
      this.firstTable = res;

      if(!this.firstTable) return;
      this.PE = this.firstTable.price_to_earnings.splice(-1)[0];
      this.PB = this.firstTable.price_to_book.splice(-1)[0];
      this.PS = this.firstTable.price_to_sales.splice(-1)[0];
      this.enterprise_value_to_earnings = this.firstTable.enterprise_value_to_earnings.splice(-1)[0];
      this.enterprise_value_to_sales = this.firstTable.enterprise_value_to_sales.splice(-1)[0];
      this.ebitda_per_share = this.firstTable.ebitda_per_share.splice(-1);
      this.enterprise_value_to_pretax_income = this.firstTable.enterprise_value_to_pretax_income.splice(-1)[0];
      this.enterprise_value_to_fcf = this.firstTable.enterprise_value_to_fcf.splice(-1);
      this.roa_median = this.firstTable.roa_median;
      this.roe_median = this.firstTable.roe_median;
      this.roic_median = this.firstTable.roic_median;
      this.revenue_cagr_10 = this.firstTable.revenue_cagr_10.splice(-1);
      this.total_assets_cagr_10 = this.firstTable.total_assets_cagr_10.splice(-1);
      this.fcf_cagr_10 = this.firstTable.fcf_cagr_10.splice(-1);
      this.eps_diluted_cagr_10 = this.firstTable.eps_diluted_cagr_10.splice(-1);
      this.gross_margin_median = this.firstTable.gross_margin_median;
      this.pretax_margin_median = this.firstTable.pretax_margin_median;
      this.fcf_margin_median = this.firstTable.fcf_margin_median;
      this.assets_to_equity_median = this.firstTable.assets_to_equity_median;
      this.debt_to_equity_median = this.firstTable.debt_to_equity_median;
      this.debt_to_assets_median = this.firstTable.debt_to_assets_median;
      this.isPageLoaded = true;
    })


    this.getCompanyData().subscribe(res=>{
      this.firstTable = res;
    })

  }


  Data = new ReplaySubject<any>(1);

  setCompanyData(info: any): void {
    this.Data.next(info);
  }

  getCompanyData() {
    return this.Data.asObservable();
  }

  getData(searchKey: string) {

    //first CAll
    this.requests.callDataBase(searchKey).subscribe(res => {

      if (res == null) {
        //Second Call
        this.requests.callApiAfterDataBase(searchKey).subscribe(res => {
          this.firstTable = res;

          if (this.firstTable.errors) {
            alert('Company Not Found');
            return;
          };

          //Third CAll
          this.requests.storeDataFromApiToDataBase(this.firstTable).subscribe(res => {
            this.setCompanyData(res);
            console.log(this.firstTable);
            this.isPageLoaded = true;
          });

        });

      } else {
        this.setCompanyData(res);
        console.log(this.firstTable);
        this.isPageLoaded = true;
      }

    }, console.error);
  }

}
