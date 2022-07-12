import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ownProfile } from 'src/app/user/models/own-profile.class';
import { OwnProfileService } from 'src/app/user/services/own-profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  display: boolean = true;
  width: string = '140%';  
  isLogin: boolean = false;
  ownProfile: ownProfile;

  constructor(private _router: Router, private _ownProfile: OwnProfileService) { }

  ngOnInit(): void {
    setInterval(() => {
      if(this.width == '140%')  this.width = '130%';
      else  this.width = '140%';
    },5000)

    if(localStorage.getItem('loginToken'))  this.isLogin = true;

    if(this.isLogin){
      this._ownProfile.getOwnProfile().subscribe((data) => {
        this.ownProfile = data;
      })
    }
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

    if(this.isLogin){
      this._ownProfile.getOwnProfile().subscribe((data) => {
        this.ownProfile = data;
      })
    }
  }

  onLogout(){
    localStorage.removeItem('loginToken');
    localStorage.removeItem('cartProds');
    localStorage.removeItem('value');

    this.isLogin = false;

    this._router.navigate(['']);
  }

}
