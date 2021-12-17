import { Component, OnInit, VERSION } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  private apiURL = "https://www.strava.com/api/v3/";
  TOKEN = "f59266e61a4d9e07dcef9434a03068e53d099086";
  clubId = 754271;
  result! : any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.reAuth().subscribe(data => {
      this.result = data
      this.GetActById(this.result)
    });
  }

  reAuth(){
    let url = `https://www.strava.com/oauth/token`;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      'Accept': 'application/json, text/plain, */*',
      Authorization: `Bearer ${this.TOKEN}`
    });
    const body = { 
            client_id: '33929',
            client_secret: '0c46ee1b55778e235eef2ad1dcdb0610ce311c3a',
            refresh_token: 'f59266e61a4d9e07dcef9434a03068e53d099086',
            grant_type: 'refresh_token'
     };
    return this.http.post(url, body, { headers });
  }

  GetActById(data : any){
    let url = `https://www.strava.com/api/v3/athlete/activities?per_page=100&access_token=${data.access_token}`;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      'Accept': 'application/json, text/plain, */*',
    });
  
    return this.http.get(url, { headers }).subscribe(dataAct => {
        console.log(dataAct);
    });

  }
}
