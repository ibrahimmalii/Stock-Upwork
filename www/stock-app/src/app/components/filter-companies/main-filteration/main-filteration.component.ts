import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RequestFunctionsService } from 'src/app/services/request-functions.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-main-filteration',
  templateUrl: './main-filteration.component.html',
  styleUrls: ['./main-filteration.component.css']
})
export class MainFilterationComponent implements OnInit {

  constructor(private http: HttpClient, private requests: RequestFunctionsService) { }

  responseData: any;
  financials: any;
  data: any;
  apiRequest: any;
  isPageLoaded: any;
  names : any;
  symbols: any;
  searchData : any;
  associatedArr : any;
  symbol : any;
  name : any;

  ngOnInit(): void {

    this.requests.setFirstValueOfSubject();

    this.http.get(`http://localhost:8000/api/keyStatistics/all`).subscribe(res => {
      this.responseData = res;
      this.names = this.responseData.names;
      // this.names = this.names.splice(0,5);
      this.symbols = this.responseData.symbols;
      // this.symbols = this.symbols.splice(0, 5)
      console.log(res);

      this.isPageLoaded = true;
    })
  }

  //=====================> Request Service To Get Data. =========================//
  getData(searchKey: string) {
    this.requests.getData(searchKey);
  }



}
