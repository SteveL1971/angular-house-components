import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from '../shared/order.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  uniqueOrders: number[] = []
  defaultOrder: number = 0;
  chosenOrder: number = 0;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.orders = this.shoppingListService.getOrders();
    console.log(this.orders)
    this.uniqueOrders = [...new Set(this.orders.map(item => item.id))];
 
    const found = this.orders.find(item => item.id);
    if(found) {this.defaultOrder = found.id}
    this.chosenOrder=this.defaultOrder
  }

  onSubmit(form : NgForm) {
    this.chosenOrder=form.value.order;
  }

  onResetFilter() {

  }

}
