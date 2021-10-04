import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private http: HttpClient) { }

  responseData : any;
  financials : any;
  data : any;
  ngOnInit(): void {
    this.data = localStorage.responseData
    this.data = JSON.parse(this.data);
    console.log(this.data)
    
    // console.log(this.data.financials.annual.revenue);
    // console.log(this.data);
    // this.financials = this.data.financials;
    // console.log(this.data.financials)
    // console.log(this.data.metadata.name)
    // this.http.get('http://public-api.quickfs.net/v1/data/all-data/MSFT?api_key=4ed0f30c148834139f4bb3c4421341690f3d3c07').subscribe(res => {
    //   console.log(res);
    //   this.responseData = res;
    //   localStorage.responseData = JSON.stringify(this.responseData.data)
    // })
  }

}
