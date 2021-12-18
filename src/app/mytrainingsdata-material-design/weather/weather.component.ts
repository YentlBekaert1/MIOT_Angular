import { Component, OnInit, VERSION } from '@angular/core';
import { map } from "rxjs/operators";
import { StravaService } from './strava.service';
import { Observable, of } from 'rxjs';
import {Auth, Activities} from './strava_auth'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {


  result! : Object;
  auth! : Auth;
  activities$! : Observable<Activities[]>;

  constructor(private strava: StravaService) {
    //auth best is state plaatsen
    this.strava.reAuth().subscribe(authdata => {
      this.auth = authdata
      this.activities$ = this.strava.GetActById(authdata);
    });
   }

  ngOnInit(): void {

  }

}
