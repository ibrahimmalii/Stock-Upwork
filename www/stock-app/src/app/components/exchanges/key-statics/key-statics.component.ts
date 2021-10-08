import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { RequestFunctionsService } from 'src/app/services/request-functions.service';
import { MainFilterationComponent } from '../../filter-companies/main-filteration/main-filteration.component';

@Component({
  selector: 'app-key-statics',
  templateUrl: './key-statics.component.html',
  styleUrls: ['./key-statics.component.css']
})
export class KeyStaticsComponent implements OnInit {

  constructor(private requests: RequestFunctionsService,private http : HttpClient) { }

  // @Input() secondTable : any;
  secondTable: any;

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

    this.http.get(`http://localhost:8000/api/keyStatistics/FB`).subscribe(res => {
      this.secondTable = res;
      if(!this.secondTable) return;
      this.revenue = this.splicedArray(this.secondTable.revenue);
      this.revenue_growth = this.splicedArray(this.secondTable.revenue_growth);
      this.gross_profit = this.splicedArray(this.secondTable.gross_profit);
      this.gross_margin = this.splicedArray(this.secondTable.gross_margin);
      this.operating_income = this.splicedArray(this.secondTable.operating_income);
      this.operating_margin = this.splicedArray(this.secondTable.operating_margin);
      this.eps_diluted = this.splicedArray(this.secondTable.eps_diluted)
      this.eps_diluted_growth = this.splicedArray(this.secondTable.eps_diluted_growth);
      this.dividends_annual = this.splicedArray(this.secondTable.dividends_annual);
      this.dividends_per_share_growth = this.splicedArray(this.secondTable.dividends_per_share_growth)
      this.roa = this.splicedArray(this.secondTable.roa);
      this.roe = this.splicedArray(this.secondTable.roe);
      this.roic = this.splicedArray(this.secondTable.roic);
      this.isPageLoaded = true;
    })

  };

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
          this.secondTable = res;

          if (this.secondTable.errors) {
            alert('Company Not Found');
            return;
          };

          //Third CAll
          this.requests.storeDataFromApiToDataBase(this.secondTable).subscribe(res => {
            this.setCompanyData(res);
            console.log(this.secondTable);
            this.isPageLoaded = true;
          });

        });

      } else {
        this.setCompanyData(res);
        console.log(this.secondTable);
        this.isPageLoaded = true;
      }

    }, console.error);
  }


}
