import { Component, Input, OnInit } from '@angular/core';
import { BasketRow } from 'src/app/shared/basket-row';
import { Item } from 'src/app/shared/item.model';

@Component({
  selector: 'app-order-items-rows-mobile',
  templateUrl: './order-items-rows-mobile.component.html',
  styleUrls: ['./order-items-rows-mobile.component.css']
})
export class OrderItemsRowsMobileComponent {

  @Input() basketRow: BasketRow = new BasketRow(new Item("","","","","",0),0);

}
