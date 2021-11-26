import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-food-corner',
  templateUrl: './food-corner.component.html',
  styleUrls: ['./food-corner.component.scss']
})
export class FoodCornerComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  // Create an instance of FormControl using the FormBuilder
  name: FormControl = this.fb.control("");

  // Class variable representing FormGroup.
  foodFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.foodFormGroup = this.fb.group({
      name:"",
      email:"",
      details:"",
      powers: "",
      country: "",
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
