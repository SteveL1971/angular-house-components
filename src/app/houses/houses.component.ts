import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { BasketRow } from '../shared/basket-row';
import { House } from '../shared/house.model';
import { Item } from '../shared/item.model';
import { ShoppingListService } from '../shopping-list.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})

export class HousesComponent implements OnInit {

  selectedValue: string = "";

  item: Item = new Item("", 'Wall', 'panel', 'pine wood paneling', 'https://www.maxpixel.net/static/photo/1x/Board-Planks-Wood-Wood-Plank-Texture-Wall-Wooden-3511802.jpg', 2999);
  house: House = new House("","Luxury Beach", 0, "", "",[new BasketRow(new Item("","","","","",0),0)])
  chosenHouse: House = new House("","", 0, "", "", [new BasketRow(new Item("","","","","",0),0)])
  chosenHouseName: boolean = false;
  collapse: boolean = true;
  houses: House[] = [
    this.house
  ]

  defaultHouse: string = this.shoppingListService.getHouses()[0].name;
  uniqueHouses: string[] = [...new Set(this.houses.map(item => item.name))];

  totalPrice: number = 0;
  totalItems: number = 0;
  showModal: boolean = false;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.houses = this.shoppingListService.getHouses();
    this.uniqueHouses = [...new Set(this.houses.map(item => item.name))];
    this.uniqueHouses.unshift('All houses')
  }

  countTotalPrice(index: number) {
    this.totalPrice = 0;
    for (let i = 0; i < this.houses[index].basketRows.length; i++) {
      this.totalPrice += this.houses[index].basketRows[i].item.price * this.houses[index].basketRows[i].amount;
    }
    return this.totalPrice;
  }

  onAddHouse(houseId: string) {
    this.chosenHouse = this.houses.find( ({ id }) => id === houseId )!
    this.shoppingListService.addSingleHouse(this.chosenHouse)
  }

  onClickImage() {
    this.showModal=!this.showModal;
 }

 onSubmit(form : NgForm) { 
    this.chosenHouse = this.houses.find( ({ name }) => name === form.value.name )!
    this.chosenHouseName = true;
}

onResetFilter() {
  this.chosenHouse= new House("","", 0, "", "",[new BasketRow(new Item("","","","","",0),0)]);
  this.chosenHouseName = false;
}


}
