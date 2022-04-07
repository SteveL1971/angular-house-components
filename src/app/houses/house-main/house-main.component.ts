import { Component, Input, OnInit } from '@angular/core';
import { BasketRow } from 'src/app/shared/basket-row';
import { House } from 'src/app/shared/house.model';
import { Item } from 'src/app/shared/item.model';
import { ShoppingListService } from 'src/app/shopping-list.service';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-house-main',
  templateUrl: './house-main.component.html',
  styleUrls: ['./house-main.component.css']
})
export class HouseMainComponent implements OnInit {
  collapse: boolean = true;
  @Input() house: House = new House("","", 0, "", "", [new BasketRow(new Item("","","","","",0),0)])
  chosenHouse: House = new House("","", 0, "", "", [new BasketRow(new Item("","","","","",0),0)])
  houses: House[] = []
  housePrice: number = 0;
  faHouse = faHouse;
  

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {
    this.houses = this.shoppingListService.getHouses();
  }

  onAddHouse(houseId: string) {
    this.chosenHouse = this.houses.find( ({ id }) => id === houseId )!
    this.shoppingListService.addSingleHouse(this.chosenHouse)
  }

  countTotalPrice() {
    this.housePrice = 0;
    if(this.house.basketRows){
      for (let i = 0; i < this.house.basketRows.length; i++) {
        this.housePrice += this.house.basketRows[i].item.price * this.house.basketRows[i].amount;
      }
    }
    return this.housePrice;
  }

}
