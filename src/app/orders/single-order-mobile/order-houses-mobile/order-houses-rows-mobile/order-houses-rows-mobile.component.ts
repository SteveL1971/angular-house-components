import { Component, Input } from '@angular/core';
import { BasketRow } from 'src/app/shared/basket-row';
import { Item } from 'src/app/shared/item.model';

@Component({
  selector: 'app-order-houses-rows-mobile',
  templateUrl: './order-houses-rows-mobile.component.html',
  styleUrls: ['./order-houses-rows-mobile.component.css']
})
export class OrderHousesRowsMobileComponent {

  @Input() basketRow: BasketRow = new BasketRow(new Item("","","","","",0),0)

}
