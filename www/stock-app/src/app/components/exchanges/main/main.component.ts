import { Component, OnInit } from '@angular/core';
import { RequestFunctionsService } from 'src/app/services/request-functions.service';
import { UserService } from 'src/app/services/user.service';
import { ApiService } from './../../../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private apiService : ApiService, private userService : UserService) { }

  isPageLoaded : boolean = false;

  ngOnInit(): void {

    const latestSearchKey = localStorage.latestSearchKey;
    this.getCurrentSearchedCompany(latestSearchKey);

  }

  // this.requests.setFirstValueOfSubject();
  getCurrentSearchedCompany(latestSearchKey : string = 'FB'){
    this.apiService.get(`http://localhost:8000/api/keyStatistics/${latestSearchKey}`,
    {headers : {'Authorization' : this.userService.getToken()}}
    ).subscribe(res => {
      localStorage.responseData = JSON.stringify(res);
      this.isPageLoaded = true;
    },console.error);
  }
}
