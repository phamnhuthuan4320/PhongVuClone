import { Component, OnInit } from '@angular/core';
import { ownProfile } from 'src/app/user/models/own-profile.class';
import { OwnProfileService } from 'src/app/user/services/own-profile.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  ownProfile: ownProfile;
  isLoading: boolean = true;
  isUpdated: boolean = false;

  constructor(private _ownProfile: OwnProfileService) { }

  ngOnInit(): void {
    window.scroll({ top: 0, behavior: "smooth" });

    this._ownProfile.getOwnProfile().subscribe((data) => {
      this.ownProfile = data;

      this.isLoading = false;
    })
  }

  onUpdate() {
    this.isLoading = true;
    
    this._ownProfile.putOwnProfile(this.ownProfile).subscribe((data) => {
      this.isLoading = false;

      this.isUpdated = true;

      setTimeout(() => {
        this.isUpdated = false;
      }, 3000);
    })
  }
}
