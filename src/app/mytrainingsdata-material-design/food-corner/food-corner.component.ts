import { Component, OnInit } from '@angular/core';
import { Food } from './food';
import { FoodAPIService } from './food-api.service';

@Component({
  selector: 'app-food-corner',
  templateUrl: './food-corner.component.html',
  styleUrls: ['./food-corner.component.scss']
})

export class FoodCornerComponent implements OnInit {
  foodSearchTerm = '';
  foodData!: Food[];

  /*constructor(private foodApi: FoodAPIService) {
    this.foodData = this.foodApi.getAll();
  }*/

 constructor(private foodApi: FoodAPIService) {
    this.foodApi
      .getAll()
      .subscribe(foodsFromApi => (this.foodData = foodsFromApi));
  }

  ngOnInit(): void {

  }

  goToFoodDetails(food: Food[]) {
    console.log('Navigate to food details, soon ...');
    console.table(food);
  }

  //filter
  updateFoodSearchTerm(input: Event) {
    this.foodSearchTerm = (input.target as HTMLInputElement).value;
  }

}
