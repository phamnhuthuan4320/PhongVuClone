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

}
