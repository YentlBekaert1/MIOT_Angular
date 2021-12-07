import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Food } from '../food'
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.scss']
})
export class FoodTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'weight', 'calories', 'sugar', 'fat', 'protiens', 'sel'];

  @Input() content!: Food[];
  @Output() detailClick = new EventEmitter<Food[]>();

  constructor() { }

  ngOnInit(): void {
  }

  handleDetailClick(name: any) {
    // prevent browser reload on click.
    console.log(`The food "${name}" has been clicked.`);
    this.detailClick.emit(name);
  }

}
