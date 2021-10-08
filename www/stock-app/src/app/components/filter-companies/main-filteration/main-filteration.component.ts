import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { RequestFunctionsService } from 'src/app/services/request-functions.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-main-filteration',
  templateUrl: './main-filteration.component.html',
  styleUrls: ['./main-filteration.component.css']
})
export class MainFilterationComponent implements OnInit {
  isResponseBack: boolean = false;

  Data = new ReplaySubject<any>(1);

  setCompanyData(info: any): void {
    this.Data.next(info);
  }

  getCompanyData() {
    return this.Data.asObservable();
  }

  constructor(private http: HttpClient, private requests: RequestFunctionsService) { }

  responseData: any;
  financials: any;
  data: any;
  apiRequest: any;
  isPageLoaded: any;
  names: any;
  symbols: any;
  searchData: any;
  associatedArr: any;
  symbol: any;
  name: any;
  firstTable: any;
  secondTable: any;

  getFaceBookData(){
    return this.http.get(`http://localhost:8000/api/keyStatistics/FB`)
  }

  ngOnInit(): void {
    this.http.get(`http://localhost:8000/api/keyStatistics/all`).subscribe(res => {
      this.responseData = res;
      this.names = this.responseData.names;
      this.symbols = this.responseData.symbols;
      this.isPageLoaded = true;
    });

    // this.getFaceBookData();

    this.getCompanyData().subscribe(res=>{
      this.data = res;
      console.log('from get data')
    });

  }

  getData(searchKey: string) {

    //first CAll
    this.requests.callDataBase(searchKey).subscribe(res => {

      if (res == null) {
        //Second Call
        this.requests.callApiAfterDataBase(searchKey).subscribe(res => {
          this.data = res;

          if (this.data.errors) {
            alert('Company Not Found');
            return;
          };

          //Third CAll
          this.requests.storeDataFromApiToDataBase(this.data).subscribe(res => {
            this.setCompanyData(res);
            console.log(this.data);
            this.isResponseBack = true;
          });

        });

      } else {
        this.setCompanyData(res);
        console.log(this.data);
        this.isResponseBack = true;
      }

    }, console.error);
  }





}
