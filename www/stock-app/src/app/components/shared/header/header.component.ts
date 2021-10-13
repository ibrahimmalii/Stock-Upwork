import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService : UserService, private router : Router) { }

  isUserLogged : boolean = false;
  ngOnInit(): void {
    this.userService.getLoggedStatus().subscribe(response=>{
      console.log(response)
      return this.isUserLogged = response;
    })
  }

  logout(){
    this.userService.logout();
    this.router.navigateByUrl('/auth/login');
  }

}
