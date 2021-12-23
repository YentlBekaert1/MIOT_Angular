import { Component, OnInit } from '@angular/core';
import { Food } from './food';
import { FoodAPIService } from './food-api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-corner',
  templateUrl: './food-corner.component.html',
  styleUrls: ['./food-corner.component.scss']
})

export class FoodCornerComponent implements OnInit {
  foodSearchTerm = '';
  foodData$: Observable<Food[]>;

  constructor(private foodApi: FoodAPIService, private router: Router) {
    this.foodData$ = this.foodApi.getAll();
  }

  ngOnInit(): void {

  }

  goToFoodDetails(food: any) {
    console.log('Navigate to food details, soon ...');
    console.log(food.Id);
     this.router.navigate(['/foodcornerdetails/'+ food.Id]);
  }

  //filter
  updateFoodSearchTerm(input: Event) {
    this.foodSearchTerm = (input.target as HTMLInputElement).value;
  }

}
