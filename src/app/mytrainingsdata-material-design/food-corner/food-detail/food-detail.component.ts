import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Food } from '../food';
import { FoodAPIService } from '../food-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit {

  food$: Observable<Food>;

  constructor(private route: ActivatedRoute, private foodApi: FoodAPIService, private location: Location) {
    this.food$ = this.route.params.pipe(
      switchMap(params => this.foodApi.getById(params?.id)) //switchmap zorgt ervoor dat je switcht van de ene observable naar de andere
    );
  }

  goBack(): void {
  this.location.back();
  }


  ngOnInit(): void {
  }

}
