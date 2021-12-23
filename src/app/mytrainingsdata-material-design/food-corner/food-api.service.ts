import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Food} from './food'
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodAPIService {

  constructor(private http: HttpClient) { }
  //private endpoint = "https://localhost:7025"; //local testing
  private endpoint = "https://sportfood-api.azurewebsites.net"; //online API

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.endpoint}/api/Food`);

  }

  getById(Id: string): Observable<Food> {
    return this.http.get<Food>(`${this.endpoint}/api/food/${Id}`);
  }

  /** POST: add a new food to the database */
  addFood(food: Food): Observable<Food> {
    return this.http.post<Food>(`${this.endpoint}/api/Food`, food)
      .pipe(
        catchError(this.handleError)
      );
  }

  //om te testen tijdens dev
  /*getAll(): Observable<Food[]> {
    return of([
        { name: 'test', brand: "test", category:"", weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001, img:""},
        { name: 'hello', brand: "hello", category:"",weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001, img:""},

    ]);
  }*/

}
