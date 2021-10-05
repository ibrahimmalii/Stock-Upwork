import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RequestFunctionsService } from 'src/app/services/request-functions.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private http: HttpClient, private requestService : RequestService, private requests : RequestFunctionsService) { }

  responseData: any;
  financials: any;
  data: any;
  requestData: any;
  apiRequest : any;
  isPageLoaded : boolean = false;



  ngOnInit(): void {
    this.data = localStorage.responseData;
    if(this.data){
      console.log('done');
      this.data = JSON.parse(this.data);
      this.isPageLoaded = true;
    }else{
      console.log('No data found');
    }
  }

}
