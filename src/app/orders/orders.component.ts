import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataStorageService } from '../shared/data-storage.service';
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
  userId = '';

  constructor(private shoppingListService: ShoppingListService,
              private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    

    this.chosenOrder=this.defaultOrder
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userId = userData.id
    this.orders = this.shoppingListService.getOrders().filter(order => order.userId===this.userId);
    this.uniqueOrders = [...new Set(this.orders.map(item => item.id))];
    const found = this.orders.find(order => order.userId === this.userId);
    if(found) {
      this.defaultOrder = found.id
      console.log('found', this.defaultOrder)
    }
  }

  onSubmit(form : NgForm) {
    this.chosenOrder=form.value.order;
  }

  onResetFilter() {

  }

}
