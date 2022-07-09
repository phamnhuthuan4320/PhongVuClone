import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  display: boolean = true;
  width: string = '140%';  
  isLogin: boolean = false;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('loginToken'))  this.isLogin = true;
    setInterval(() => {
      if(this.width == '140%')  this.width = '130%';
      else  this.width = '140%';
    },5000)
  }

  onClose(){
    this.display = false;
  }

  onLogin(){
    if(localStorage.getItem('loginToken')){
      this._router.navigate(['']);
    }
    else this._router.navigate(['/user/login']);
  }

  onGetLoginToken(){
    if(localStorage.getItem('loginToken'))  this.isLogin = true;
  }

  onLogout(){
    localStorage.removeItem('loginToken');
    this.isLogin = false;
  }

}
