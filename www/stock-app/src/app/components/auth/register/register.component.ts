import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  form: FormGroup = new FormGroup({});
  isLogged: Boolean = false;
  isLoginSuccess = false;
  isLoginError = false;
  code: string = '';
  responseData: any;
  personalData: any;
  name: any;
  email: any;
  isPersonalDataLoaded: boolean = false;

  ngOnInit(): void {

    if (location.search.includes('code')) {
      this.code = location.search.substring(1).split('&')[0].split('=')[1]
      console.log(this.code);
      this.http.post(`https://www.patreon.com/api/oauth2/token?code=${this.code}&grant_type=authorization_code&client_id=8xIjmOHkGJieBeSt-JYRvzi8d3nGVhwmTvbPemEMIgYpyShm8CbFYVYa77H9WsjD&client_secret=rVuXCubQbi2qRp8ndIrsQUOBozg3mhr4jn-x4hFE5ixf8-jms0z2242Yja2C_1fA&redirect_uri=http://localhost:4200/auth/register&Content-Type=application/x-www-form-urlencoded`, '').subscribe(res => {
        console.log(res);
        this.responseData = res;
        if (this.responseData.access_token) {
          this.http.get('https://www.patreon.com/api/oauth2/api/current_user', { headers: { "Authorization": `Bearer ${this.responseData.access_token}` } }).subscribe(res => {
            console.log(res);
            this.personalData = res;
            this.name = this.personalData.data.attributes.full_name;
            this.email = this.personalData.data.attributes.email;
            this.isPersonalDataLoaded = true;


            // Validate Login Form
            this.form = this.formBuilder.group({
              full_name: [this.name, [Validators.minLength(4), Validators.maxLength(255), Validators.required]],
              email: [this.email, [Validators.email, Validators.maxLength(255), Validators.required]],
              password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
              password_confirmation: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
            });
          })
        }
      })
    }





  }

  register() {
    this.isLogged = true;

    if (
      this.form.valid &&
      this.form.controls.password.value == this.form.controls.password_confirmation.value&&
      this.form.controls.full_name.value == this.name &&
      this.form.controls.email.value == this.email
      ) {
      this.isLoginSuccess = true;
      this.isLoginError = false
      console.log(this.form.value);
    } else {
      console.log(this.email);
      console.log(this.form.controls.email.value);
      this.isLoginError = true;
      this.isLoginSuccess = false;
    }

  }

  hide() {
    this.isLoginSuccess = false;
    this.isLoginError = false;
  }

}
