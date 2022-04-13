import { Component, Input, OnInit } from '@angular/core';
import { BasketRow } from 'src/app/shared/basket-row';
import { House } from 'src/app/shared/house.model';
import { Item } from 'src/app/shared/item.model';
import { ShoppingListService } from 'src/app/shopping-list.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-house-main',
  templateUrl: './house-main.component.html',
  styleUrls: ['./house-main.component.css']
})
export class HouseMainComponent implements OnInit {
  
  collapse: boolean = true;
  @Input() house: House = new House("","", 0, "", "", [new BasketRow(new Item("","","","","",0),0)])

  constructor(private shoppingListService : ShoppingListService,
              private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
  }

  onAddHouse() {
    this.shoppingListService.addSingleHouse(this.house)
    this.dataStorageService.storeShoppingBasketHouses();
  }

  countTotalPrice() {
    let housePrice = 0;
    if(this.house.basketRows){
      for (let i = 0; i < this.house.basketRows.length; i++) {
        housePrice += this.house.basketRows[i].item.price * this.house.basketRows[i].amount;
      }
    }
    return housePrice;
  }

}
