import { Component, Input, OnInit } from '@angular/core';
import { BasketRow } from 'src/app/shared/basket-row';
import { ShoppingListService } from 'src/app/shopping-list.service';

@Component({
  selector: 'app-shopping-list-house-rows',
  templateUrl: './shopping-list-house-rows.component.html',
  styleUrls: ['./shopping-list-house-rows.component.css']
})
export class ShoppingListHouseRowsComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

  onClickImage() {
    this.showModal=!this.showModal;
 }

}
