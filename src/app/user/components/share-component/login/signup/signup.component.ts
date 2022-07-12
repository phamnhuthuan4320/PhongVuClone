import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/user/models/user.class';
import { SignupService } from 'src/app/user/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isLoading: boolean = false;
  isCreated: boolean = false;
  user: user = new user('', '', '', '', '', new Date(), '');

  constructor(private _signup: SignupService) { }

  ngOnInit(): void {
    window.scroll({top: 0, behavior: "smooth"});
  }

  onCreate(){
    this.isLoading = true;

    this._signup.postAccount(this.user).subscribe(data => {
      this.isLoading = false;

      this.isCreated = true;

      setTimeout(() => {
        this.isCreated = false;
      }, 3000);
    })
  }

}
