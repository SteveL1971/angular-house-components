import { Component, Input } from '@angular/core';
import { BasketRow } from 'src/app/shared/basket-row';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent  {

  @Input() basketRows: BasketRow[] = [];

  countTotalPrice() {
      let totalPrice = 0;
      for (let i = 0; i < this.basketRows.length; i++) {
      totalPrice += this.basketRows[i].item.price * this.basketRows[i].amount;
    }
    return totalPrice;
  }

}
