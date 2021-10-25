import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username:any='';
  email:any='';
  yourrequest:any='';
  remainerequest:any='';

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('username' , 'Alaa Ali')
    localStorage.setItem('email' , 'alaaalh437@gmail.com')
    localStorage.setItem('yourrequest' , '40')
    localStorage.setItem('remainerequest' , '50')


  
    this.username = localStorage.getItem('username')
    this.email = localStorage.getItem('email')
    this.yourrequest = localStorage.getItem('yourrequest')
    this.remainerequest = localStorage.getItem('remainerequest')

  }

}
