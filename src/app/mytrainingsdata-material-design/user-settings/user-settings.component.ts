import { Component, OnInit } from '@angular/core';
import { map } from "rxjs/operators";
import { StravaService } from './strava.service';
import { Observable, of } from 'rxjs';
import {Auth, Activities} from './strava_auth'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  result! : Object;
  auth! : Auth;
  activities$! : Observable<Activities[]>;
  authtoken : string = "";
  accesstoken:string = "";
  refrtoken : string = "";
  athlete: any;

  constructor(private strava: StravaService, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      this.authtoken = params.code;
      //console.log(this.authtoken); // auth_token
    });
    if(this.authtoken != undefined){
      this.strava.Auth(this.authtoken).subscribe(authdata => {
        this.accesstoken = authdata.access_token
        this.athlete = authdata.athlete;
        console.log(this.athlete);
        this.strava.reAuth(this.accesstoken).subscribe(
          refrdata => { this.activities$ = this.strava.GetActById(refrdata.access_token);
        })
      });
    }
  }

}
