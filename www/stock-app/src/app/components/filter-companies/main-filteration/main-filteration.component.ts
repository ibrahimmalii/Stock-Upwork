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

  ngOnInit(): void {
    // this.requests.getCurrentData();

    // this.requests.getCompanyData().subscribe(res => {
    //   this.data = res;
    // })
  }

  //=====================> Request Service To Get Data. =========================//
  getData(searchKey: string) {
    this.requests.getData(searchKey);
  }


}
