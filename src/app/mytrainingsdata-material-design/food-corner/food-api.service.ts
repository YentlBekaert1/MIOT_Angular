import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Food} from './food'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodAPIService {

  constructor(private http: HttpClient) { }
  private endpoint = "https://localhost:7025";

  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.endpoint}/api/Food`);
            
  }

  getById(Id: string): Observable<Food> {
    return this.http.get<Food>(`${this.endpoint}/api/food/${Id}`);
  }
  
  /*getAll(): Observable<Food[]> {
    return of([
        { name: 'test', brand: "test", category:"", weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001, img:""},
        { name: 'hello', brand: "hello", category:"",weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001, img:""},
    
    ]);
  }*/

}
