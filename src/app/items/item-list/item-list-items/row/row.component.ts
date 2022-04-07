import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/item.model';
import { ShoppingListService } from 'src/app/shopping-list.service';
import { faCartShopping, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { House } from 'src/app/shared/house.model';

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
    id: "",
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
  houses: House[] = [];
  temp = 0;
  houseIdx = -1;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.amount=0;

    if(isNaN(parseInt(this.source,10))){
       } else {
        this.houseIdx=parseInt(this.source,10)
        this.source="new-house"
      }

      this.houses=this.shoppingListService.getHouses()
      if(this.houseIdx>-1){
        if(this.houses[this.houseIdx].basketRows){
          const found = this.houses[this.houseIdx].basketRows.findIndex(element => element.item.id === this.item.id);
          if(found>-1){
            this.amount= this.houses[this.houseIdx].basketRows[found].amount
          }
          this.onEditBasketRow()
        }
      }
    } 


  onAddItemToCart() {
      this.shoppingListService.addItem(this.item,1);
  }

  onEditBasketRow() {
    this.shoppingListService.addBasketRowsToNewHouse(this.item ,this.amount)
  }

  onAddToAmount() {
      this.amount ++;
      this.shoppingListService.addBasketRowsToNewHouse(this.item ,this.amount)
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
