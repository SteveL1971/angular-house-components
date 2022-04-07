import { Component, Input, OnInit } from '@angular/core';
import { BasketRow } from 'src/app/shared/basket-row';
import { House } from 'src/app/shared/house.model';
import { Item } from 'src/app/shared/item.model';
import { Order } from 'src/app/shared/order.model';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.css']
})
export class SingleOrderComponent implements OnInit {
  // @Input() order: Order =  new Order(0,0,[],[])
  @Input() order: Order =  new Order('', 0,0,[new House(0,"", 0, "" , "", [new BasketRow(new Item(0,"","","","",0),0)])], [new BasketRow(new Item(0,"","","","",0),0)] )
  // @Input() order?: Order;
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



}
