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

  constructor(private requests: RequestFunctionsService, private http : HttpClient) { }
  data : any;


  getFaceBookData(){
    return this.http.get(`http://localhost:8000/api/keyStatistics/FB`)
  }
  ngOnInit(): void {
    this.getFaceBookData();
  }

}
