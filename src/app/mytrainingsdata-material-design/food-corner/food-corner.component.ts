import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

export interface Food {
  name: string;
  position: number;
  weight: number;
  calories: number;
  sugar: number;
  fat: number;
  protiens: number;
  sel: number;
}

const ELEMENT_DATA: Food[] = [
  {position: 1, name: 'test', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
  {position: 1, name: 'test', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
  {position: 1, name: 'test', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
  {position: 1, name: 'test', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
  {position: 1, name: 'test', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
  {position: 1, name: 'test', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
  {position: 1, name: 'test', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
  {position: 1, name: 'test', weight: 100, calories: 60, sugar: 40, fat: 10, protiens: 6, sel: 0.001},
];

@Component({
  selector: 'app-food-corner',
  templateUrl: './food-corner.component.html',
  styleUrls: ['./food-corner.component.scss']
})
export class FoodCornerComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'calories', 'sugar', 'fat', 'protiens', 'sel'];
  dataSource = ELEMENT_DATA;

  // Create an instance of FormControl using the FormBuilder
  name: FormControl = this.fb.control("");

  // Class variable representing FormGroup.
  foodFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.foodFormGroup = this.fb.group({
      name:"",
      weight:"",
      calories:"",
      sugar: "",
      fat: "",
      protiens: "",
      sel: "",
      dob: new Date('11/15/2021'),
      rating: 2,
      cape: false,
      });
  }

  ngOnInit(): void {

  }

  submitHandler(){

  }

}
