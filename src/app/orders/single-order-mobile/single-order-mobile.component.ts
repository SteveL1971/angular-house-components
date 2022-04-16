import { Component, Input, OnInit } from '@angular/core';
import { BasketRow } from 'src/app/shared/basket-row';
import { House } from 'src/app/shared/house.model';
import { Item } from 'src/app/shared/item.model';
import { Order } from 'src/app/shared/order.model';

@Component({
  selector: 'app-single-order-mobile',
  templateUrl: './single-order-mobile.component.html',
  styleUrls: ['./single-order-mobile.component.css']
})
export class SingleOrderMobileComponent implements OnInit {

  collapse: boolean = true;

  @Input() order: Order =  new Order('', 0,0,[new House("","", 0, "" , "", [new BasketRow(new Item("","","","","",0),0)])], [new BasketRow(new Item("","","","","",0),0)] )
  @Input() chosenOrder: number = 0;
  totalPrice: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  countTotalPrice() {
    this.totalPrice = 0;
 
      for (let i = 0; i < this.order.basketRows.length; i++) {
      this.totalPrice += this.order.basketRows[i].item.price * this.order.basketRows[i].amount;
    }
  
    return this.totalPrice;
  }

  countTotalHousePrice(houseIndex: number) {
    this.totalPrice = 0;
    for (let i = 0; i < this.order.houses[houseIndex].basketRows.length; i++) {
      this.totalPrice += this.order.houses[houseIndex].basketRows[i].item.price * this.order.houses[houseIndex].basketRows[i].amount;
    }
    return this.totalPrice;
  }

}
