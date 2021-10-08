import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  login(){

  }

  register(){

  }

  isLogged():boolean{
    return localStorage.token ? true : false;
  }
}
