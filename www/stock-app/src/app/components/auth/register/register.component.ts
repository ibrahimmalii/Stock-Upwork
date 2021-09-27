import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  form : FormGroup = new FormGroup({});
  isLogged : Boolean = false;
  isLoginSuccess = false;
  isLoginError = false;

  ngOnInit(): void {
    // Validate Login Form
    this.form = this.formBuilder.group({
      email : ['' , [Validators.email ,Validators.maxLength(255) , Validators.required] ],
      password : ['' , [Validators.required , Validators.minLength(8) , Validators.maxLength(15)]],
      password_confirmation : ['' , [Validators.required , Validators.minLength(8) , Validators.maxLength(15)]],
    });

  }

  register(){
    this.isLogged = true;

    if(this.form.valid && this.form.controls.password == this.form.controls.password_confirmation){
      this.isLoginSuccess = true;
      this.isLoginError = false
      console.log(this.form.value);
    }else {
      this.isLoginError = true;
      this.isLoginSuccess = false;
    }

  }

  hide(){
    this.isLoginSuccess = false;
    this.isLoginError = false;
  }

}
