import { Component, OnInit } from '@angular/core';
import { map } from "rxjs/operators";
import { StravaService } from '../../strava.service';
import { Observable, of } from 'rxjs';
import { Activities} from '../../strava_act'
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { selectStravaAuthLoading, selectStravaAuthresult, selectStravaRefreshToken } from 'src/app/store/stravaauth.selector';
import { initialAuthState } from 'src/app/store/stravaauth.reducer';
import { AuthActions } from 'src/app/store/stravaauth.actions';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  activities$! : Observable<Activities[]>;
  athlete: any;

  refresh_token$= this.store.select(selectStravaRefreshToken);
  boolToken!: boolean;
  boolToken$ = this.store.select(selectStravaAuthLoading);
  resultAuth$ = this.store.select(selectStravaAuthresult);

  constructor(private strava: StravaService, private route: ActivatedRoute, private store: Store<AppState>) {
   }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.boolToken = state.Authdata.loading;
      console.log(state);
    });
      //first get params out of URL
      this.store.select(selectStravaAuthLoading).subscribe( bool =>{
        if(bool == false){
          this.route.queryParams.subscribe(params => {
            if(params.code){
              //get refreshtoken
                this.strava.Auth(params.code).subscribe(authdata => {
                this.store.dispatch(AuthActions.ReceivedRefreshToken({refresh_token:authdata.refresh_token}));
                this.store.dispatch(AuthActions.ReceivedAccessToken({access_token:authdata.access_token}));
                this.athlete = authdata.athlete;
                console.log(this.athlete);
                this.store.dispatch(AuthActions.GotCode());
                //try refreshtoken to get new access token
                //this.activities$ = this.strava.GetActById(authdata.access_token);
              });
            }
          });
        }
      })
    }

    /*
      this.strava.Auth(this.authtoken).subscribe(authdata => {
        this.accesstoken = authdata.access_token
        this.athlete = authdata.athlete;
        console.log(this.athlete);
        this.strava.reAuth(this.accesstoken).subscribe(
          refrdata => { this.activities$ = this.strava.GetActById(refrdata.access_token);
        })
      });

        this.strava.reAuth(authdata.refresh_token).subscribe(refrdata => {
              this.store.dispatch(AuthActions.ReceivedAccessToken({access_token:refrdata.access_token}));
              this.activities$ = this.strava.GetActById(refrdata.access_token);
              this.store.dispatch(AuthActions.GotCode());
            })
    }*/
}

