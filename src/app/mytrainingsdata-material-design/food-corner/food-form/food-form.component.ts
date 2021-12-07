import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss']
})
export class FoodFormComponent implements OnInit {

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
