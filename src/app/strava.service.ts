import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Activities} from './strava_act'
import { Auth,ReAuth } from './store/stravaauth.model';

@Injectable({
  providedIn: 'root'
})
export class StravaService {

  private apiURL = "https://www.strava.com/api/v3/";
  TOKEN = "f59266e61a4d9e07dcef9434a03068e53d099086";

  constructor(private http: HttpClient) { }

  Auth(acces_token:string): Observable<Auth>{
    let url = `https://www.strava.com/oauth/token`;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      'Accept': 'application/json, text/plain, */*',
      Authorization: `Bearer ${acces_token}`
    });
    const body = {
            client_id: '33929',
            client_secret: '0c46ee1b55778e235eef2ad1dcdb0610ce311c3a',
            code: acces_token, //hier moet nog refr token komen
            grant_type: 'authorization_code'
     };
    return this.http.post<Auth>(url, body, { headers });
  }

  reAuth( reftoken: string): Observable<ReAuth>{
    let url = `https://www.strava.com/oauth/token`;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      'Accept': 'application/json, text/plain, */*',
      Authorization: `Bearer ${reftoken}`
    });
    const body = {
            client_id: '33929',
            client_secret: '0c46ee1b55778e235eef2ad1dcdb0610ce311c3a',
            refresh_token: reftoken, //hier moet nog refr token komen
            grant_type: 'refresh_token'
     };
    return this.http.post<ReAuth>(url, body, { headers });
  }

  GetActById(accesstoken : string){
    let url = `https://www.strava.com/api/v3/athlete/activities?per_page=100&access_token=${accesstoken}`;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      'Accept': 'application/json, text/plain, */*',
    });
    return of( this.http.get<Activities[]>(url, { headers }));
  }
}
