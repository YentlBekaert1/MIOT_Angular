import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Food } from '../food';
import { FoodAPIService } from '../food-api.service';

//https://www.positronx.io/how-to-use-angular-8-httpclient-to-post-formdata/

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss']
})
export class FoodFormComponent implements OnInit {

  foodForm = new FormGroup({
    name: new FormControl(''),
    brand: new FormControl(''),
    weight: new FormControl(0),
    calories: new FormControl(0),
    sugar: new FormControl(0),
    fat: new FormControl(0),
    protiens: new FormControl(0),
    sel: new FormControl(0),
    img: new FormControl(''),
    category: new FormControl(''),

  });

  constructor(private foodApi: FoodAPIService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.foodForm = this.fb.group({
      name: [""],
      brand: [""],
      weight: [0],
      calories:[0],
      sugar: [0],
      fat:[0],
      protiens: [0],
      sel: [0],
      img: [""],
      category: [""]
    })
  }

  submitHandler(){
    console.log(this.foodForm.value);
    this.foodApi
      .addFood(this.foodForm.value)
      .subscribe(data => console.log(data));
  }

}
