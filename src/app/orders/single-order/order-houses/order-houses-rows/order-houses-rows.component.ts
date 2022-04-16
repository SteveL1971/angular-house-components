import { Component, Input } from '@angular/core';
import { BasketRow } from 'src/app/shared/basket-row';
import { Item } from 'src/app/shared/item.model';

@Component({
  selector: 'app-order-houses-rows',
  templateUrl: './order-houses-rows.component.html',
  styleUrls: ['./order-houses-rows.component.css']
})
export class OrderHousesRowsComponent {

  @Input() basketRow: BasketRow = new BasketRow(new Item("","","","","",0),0)

}
