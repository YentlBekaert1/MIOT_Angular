import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { FoodAPIService } from '../food-api.service';

//https://www.positronx.io/how-to-use-angular-8-httpclient-to-post-formdata/

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss']
})
export class FoodFormComponent implements OnInit {

    foodForm = this.fb.group({
      name: ["", Validators.required],
      brand: ["", Validators.required],
      weight: [0],
      calories:[0],
      sugar: [0],
      fat:[0],
      protiens: [0],
      sel: [0],
      img: [""],
      category: ["", Validators.required]
    });


  constructor(private foodApi: FoodAPIService, private fb: FormBuilder) {

  }

  ngOnInit(): void {

  }

  submitHandler(){
    console.log(this.foodForm.value);
   if(this.foodForm.status == 'VALID'){
    this.foodApi
    .addFood(this.foodForm.value)
    .subscribe(data => console.log(data));
   }
  }

}
