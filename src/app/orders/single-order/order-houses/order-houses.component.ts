import { Component, Input, OnInit } from '@angular/core';
import { BasketRow } from 'src/app/shared/basket-row';
import { House } from 'src/app/shared/house.model';
import { Item } from 'src/app/shared/item.model';

@Component({
  selector: 'app-order-houses',
  templateUrl: './order-houses.component.html',
  styleUrls: ['./order-houses.component.css']
})
export class OrderHousesComponent implements OnInit {
  @Input() house: House = new House("","", 0, "" , "", [new BasketRow(new Item("","","","","",0),0)])
  totalPrice: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  countTotalPrice() {
    this.totalPrice = 0;
    for (let i = 0; i < this.house.basketRows.length; i++) {
      this.totalPrice += this.house.basketRows[i].item.price * this.house.basketRows[i].amount;
    }
    return this.totalPrice;
  }

}
