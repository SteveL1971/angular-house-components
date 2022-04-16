import { Component, Input } from '@angular/core';
import { BasketRow } from 'src/app/shared/basket-row';
import { Item } from 'src/app/shared/item.model';

@Component({
  selector: 'app-shopping-list-house-rows-mobile',
  templateUrl: './shopping-list-house-rows-mobile.component.html',
  styleUrls: ['./shopping-list-house-rows-mobile.component.css']
})
export class ShoppingListHouseRowsMobileComponent {

  @Input() basketRow: BasketRow = new BasketRow(new Item("","","","","",0),0)

}
