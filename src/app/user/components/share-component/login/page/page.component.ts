import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/user/services/login.service';
import { loginToken } from 'src/app/user/models/login-token.class';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  username: string;
  password: string;
  loginToken: loginToken;
  isLoading: boolean = false;
  form: FormGroup;
  error: boolean = false;
  isForgotClicked: boolean = false;
  isForgotEmail: boolean = false;
  isResetClicked: boolean = false;
  isResetPass: boolean = false;

  constructor(private _login: LoginService, private _router: Router, public _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    window.scroll({top: 0, behavior: "smooth"});  

    this.createForm();
  }

  onLogin(){
    this.isLoading = true;

    this.username = this.form.get('email').value;
    this.password = this.form.get('password').value;

    this._login.postUser({'username': this.username, 'password': this.password}).subscribe((data) => {
      this.loginToken = data;
      
      localStorage.setItem('loginToken', JSON.stringify(this.loginToken));
      
      this._router.navigate(['']);
      
    }, () => {
      this.isLoading = false;
      this.error = true;
    })
  }

  createForm(){
    this.form = this. _formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
      password: ['', [Validators.required]]
    })
  }

  onResetForm() {
    this.form.reset();
  }

  onForgotClicked(){
    this.username = this.form.get('email').value;

    if(this.username == '' || this.username == null){
      this.isForgotEmail = true;

      setTimeout(() => {
        this.isForgotEmail = false;
      }, 3000);
    }
    else {
      let resetPassToken: string;

      this.isLoading = true;

      this._login.postForgot({'email': this.username}).subscribe(data => {
        resetPassToken = data;

        localStorage.setItem('resetPassToken', JSON.stringify(resetPassToken));

        this.isLoading = false;

        this.isForgotClicked = true;

        setTimeout(() => {
          this.isForgotClicked = false;
        }, 3000);
      })
    }
  }

  onResetClicked(){
    this.password = this.form.get('password').value;

    if(this.password == '' || this.password == null){
      this.isResetPass = true;

      setTimeout(() => {
        this.isResetPass = false;
      }, 3000);
    }
    else {
      let resetPassToken = JSON.parse(localStorage.getItem('resetPassToken'));

      this.isLoading = true;

      this._login.postResetPass({'token': resetPassToken.data.resetPasswordToken, 'newPassword': this.password}).subscribe(data => {

        this.isLoading = false;

        this.isResetClicked = true;

        setTimeout(() => {
          this.isResetClicked = false;
        }, 3000);
      })
    }
  }

}
