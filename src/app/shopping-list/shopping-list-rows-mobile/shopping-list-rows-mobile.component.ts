import { Component, Input, OnInit } from '@angular/core';
import { BasketRow } from 'src/app/shared/basket-row';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { ShoppingListService } from 'src/app/shopping-list.service';

@Component({
  selector: 'app-shopping-list-rows-mobile',
  templateUrl: './shopping-list-rows-mobile.component.html',
  styleUrls: ['./shopping-list-rows-mobile.component.css']
})
export class ShoppingListRowsMobileComponent implements OnInit {
  showModal: boolean = false;
  @Input () index: number = 0;
  @Input () showButtons: boolean = true;
  @Input() basketRow: BasketRow = {
    amount: 0,
    item: {
        id: "",
        name: "",
        category: "",
        description: "",
        imageUrl: "",
        price: 0
    }
  };

  constructor(private shoppingListService: ShoppingListService,
              private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
  }

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

  onClickImage() {
    this.showModal=!this.showModal;
 }

}
