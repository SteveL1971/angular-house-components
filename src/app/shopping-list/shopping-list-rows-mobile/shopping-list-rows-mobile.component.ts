import { Component, Input } from '@angular/core';

import { Item } from 'src/app/shared/item.model';
import { BasketRow } from 'src/app/shared/basket-row';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { ShoppingListService } from 'src/app/shopping-list.service';

@Component({
  selector: 'app-shopping-list-rows-mobile',
  templateUrl: './shopping-list-rows-mobile.component.html',
  styleUrls: ['./shopping-list-rows-mobile.component.css']
})

export class ShoppingListRowsMobileComponent {

  @Input () index: number = 0;
  @Input () showButtons: boolean = true;
  @Input() basketRow: BasketRow = new BasketRow(new Item("","","","","",0),0);

  constructor(private shoppingListService: ShoppingListService,
              private dataStorageService: DataStorageService) { }

  onRemoveItemFromCart() {
    this.shoppingListService.removeSingleItem(this.index);
    this.dataStorageService.storeShoppingBasket();
  }

  onAddItemToCart() {
    this.shoppingListService.addSingleItem(this.index);
    this.dataStorageService.storeShoppingBasket();
  }

  onRemoveRowFromCart() {
    this.shoppingListService.removeRow(this.index)
    this.dataStorageService.storeShoppingBasket();
  }

}
