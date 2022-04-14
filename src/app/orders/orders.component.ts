import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  userId = '';
  orders: Order[] = [];
  uniqueOrders: number[] = []
  selectedValue = 0;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {

    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData') || '{}');

    this.userId = userData.id
    this.orders = this.shoppingListService.getOrders().filter(order => order.userId===this.userId);
    this.uniqueOrders = [...new Set(this.orders.map(item => item.id))];
  
  }
}
