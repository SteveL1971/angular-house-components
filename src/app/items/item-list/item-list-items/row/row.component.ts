import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/item.model';
import { ShoppingListService } from 'src/app/shopping-list.service';
import { faCartShopping, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit, OnChanges {
  showModal: boolean = false;
  @Input() itemRow: string = "";
  @Input() source: string = "";
  @Input() reset: boolean = false;
  @Input() item: Item = {
    id: 0,
    name: "",
    category: "",
    description: "",
    imageUrl: "",
    price: 0
  };
  faCartShopping = faCartShopping;
  faPlus = faPlus;
  faMinus = faMinus;
  amount = 0;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
     this.amount=0;
    } 


  onAddItemToCart() {
      this.shoppingListService.addItem(this.item,1);
  }
  onAddToAmount() {
      this.amount ++;
      this.shoppingListService.addBasketRowsToNewHouse(this.item)
  }

  onSubractFromAmount() {
    if(this.amount>0) {
      this.amount --;
      this.shoppingListService.removeBasketRowsFromNewHouse(this.item)
    }
  }

  onClickImage() {
    this.showModal=!this.showModal;
 }

}
