import { Pipe, PipeTransform } from '@angular/core';
import { Food } from '../food'

@Pipe({
  name: 'foodFilter'
})
export class FoodFilterPipe implements PipeTransform {

  transform(foods: Food[] | null, searchTerm: string | null): Food[] {
    if (!searchTerm) {
      return foods || [];
    }

    if (!foods) {
      return [];
    }

    return foods.filter(food =>
      food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  }
}
