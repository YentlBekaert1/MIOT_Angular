import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Auth, Activities} from './strava_auth'


@Injectable({
  providedIn: 'root'
})
export class StravaService {

  private apiURL = "https://www.strava.com/api/v3/";
  TOKEN = "f59266e61a4d9e07dcef9434a03068e53d099086";

  constructor(private http: HttpClient) { }

  reAuth(): Observable<Auth>{
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
    return this.http.post<Auth>(url, body, { headers });
  }

  GetActById(data : any): Observable<Activities[]>{
    let url = `https://www.strava.com/api/v3/athlete/activities?per_page=100&access_token=${data.access_token}`;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      'Accept': 'application/json, text/plain, */*',
    });

    return this.http.get<Activities[]>(url, { headers });
  }
}
