import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/item.model';
import { ShoppingListService } from 'src/app/shopping-list.service';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  showModal: boolean = false;
  @Input() itemRow: string = "";
  @Input() item: Item = {
    id: 0,
    name: "",
    category: "",
    description: "",
    imageUrl: "",
    price: 0
  };
  faCartShopping = faCartShopping;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItemToCart() {
    this.shoppingListService.addItem(this.item,1);
  }

  onClickImage() {
    this.showModal=!this.showModal;
 }

}
