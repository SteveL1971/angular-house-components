import { Component, Input } from '@angular/core';
import { BasketRow } from 'src/app/shared/basket-row';
import { Item } from 'src/app/shared/item.model';

@Component({
  selector: 'app-order-items-rows',
  templateUrl: './order-items-rows.component.html',
  styleUrls: ['./order-items-rows.component.css']
})
export class OrderItemsRowsComponent {

  @Input() basketRow: BasketRow = new BasketRow(new Item("","","","","",0),0);

}
