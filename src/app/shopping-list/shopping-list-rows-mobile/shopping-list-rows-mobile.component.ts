import { Component, Input, OnInit } from '@angular/core';
import { BasketRow } from 'src/app/shared/basket-row';
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

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onRemoveItemFromCart() {
    this.shoppingListService.removeSingleItem(this.index);
  }

  onAddItemToCart() {
    this.shoppingListService.addSingleItem(this.index);
  }

  onRemoveRowFromCart() {
    this.shoppingListService.removeRow(this.index)
  }

  onClickImage() {
    this.showModal=!this.showModal;
 }

}
