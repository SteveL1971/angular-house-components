import { Component, Input } from '@angular/core';
import { House } from 'src/app/shared/house.model';

@Component({
  selector: 'app-order-houses',
  templateUrl: './order-houses.component.html',
  styleUrls: ['./order-houses.component.css']
})

export class OrderHousesComponent {
  
  @Input() houses: House[] = [];

  countTotalPrice(index: number) {
    let totalPrice = 0;
    for (let i = 0; i < this.houses[index].basketRows.length; i++) {
      totalPrice += this.houses[index].basketRows[i].item.price * this.houses[index].basketRows[i].amount;
    }
    return totalPrice;
  }

}
