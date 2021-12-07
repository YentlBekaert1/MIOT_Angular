import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Food} from './food'
@Injectable({
  providedIn: 'root'
})
export class FoodAPIService {
  
  getAll(): Observable<Food[]> {
    return of([
        { name: 'test', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
        { name: 'hello', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
        { name: 'number', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
        { name: 'test', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
        { name: 'hello', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
        { name: 'number', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
        { name: 'test', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
        { name: 'hello', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
        { name: 'number', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
        { name: 'test', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
        { name: 'hello', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
        { name: 'number', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
        { name: 'test', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
        { name: 'hello', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
        { name: 'number', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
        { name: 'test', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
        { name: 'hello', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
        { name: 'number', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
    ]);
  }
}
