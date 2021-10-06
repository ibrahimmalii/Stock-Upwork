import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor(private http : HttpClient) { }
  arrayOfInputs = [];

  ngOnInit(): void {
    this.arrayOfInputs.length = 6;
    // this.http.get(`http://localhost:8000/api/keyStatistics/all`).subscribe(res => {
    //   console.log(res);
    //   // localStorage.responseData = JSON.stringify(data);
    // })
  }



}
