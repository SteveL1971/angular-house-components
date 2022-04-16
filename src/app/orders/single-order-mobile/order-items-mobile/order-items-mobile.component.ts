import { Component, Input } from '@angular/core';
import { BasketRow } from 'src/app/shared/basket-row';

@Component({
  selector: 'app-order-items-mobile',
  templateUrl: './order-items-mobile.component.html',
  styleUrls: ['./order-items-mobile.component.css']
})
export class OrderItemsMobileComponent {

  @Input() basketRows: BasketRow[] = [];

  countTotalPrice() {
      let totalPrice = 0;
      for (let i = 0; i < this.basketRows.length; i++) {
      totalPrice += this.basketRows[i].item.price * this.basketRows[i].amount;
    }
    return totalPrice;
  }

}
