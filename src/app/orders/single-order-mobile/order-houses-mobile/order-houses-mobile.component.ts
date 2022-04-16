import { Component, Input } from '@angular/core';
import { House } from 'src/app/shared/house.model';

@Component({
  selector: 'app-order-houses-mobile',
  templateUrl: './order-houses-mobile.component.html',
  styleUrls: ['./order-houses-mobile.component.css']
})
export class OrderHousesMobileComponent {

  @Input() houses: House[] = [];

  countTotalPrice(index: number) {
    let totalPrice = 0;
    for (let i = 0; i < this.houses[index].basketRows.length; i++) {
      totalPrice += this.houses[index].basketRows[i].item.price * this.houses[index].basketRows[i].amount;
    }
    return totalPrice;
  }

}
