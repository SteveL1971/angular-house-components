import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { ShoppingListService } from '../shopping-list.service';
import { House } from './house.model';
import { Item } from './item.model';
import { Order } from './order.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private shoppingListService: ShoppingListService,
    private authService: AuthService
  ) {}

  storeHouses() {
    const houses = this.shoppingListService.getHouses()
    this.http
      .put(
        'https://ng-complete-guide-1bc8e-default-rtdb.europe-west1.firebasedatabase.app/houses.json',
        houses
      )
      .subscribe(response => {
        console.log(response);
      });
    }

  storeOrders() {
    const orders = this.shoppingListService.getOrders()
    this.http
      .put(
        'https://ng-complete-guide-1bc8e-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
        orders
      )
      .subscribe(response => {
        console.log(response);
      });
    }

  storeItems() {
    const items = this.shoppingListService.getItems()
    this.http
      .put(
        'https://ng-complete-guide-1bc8e-default-rtdb.europe-west1.firebasedatabase.app/items.json',
        items
      )
      .subscribe(response => {
        console.log(response);
      });
    }

//   storeHouse(house: House) {
//     this.http
//       .post(
//         'https://ng-complete-guide-1bc8e-default-rtdb.europe-west1.firebasedatabase.app/houses.json',
//         house
//       )
//       .subscribe(response => {
//         console.log(response);
//       });
//   }


fetchHouses() {
    console.log('in fetchHouses')
    return this.http
    .get<House[]>(
        'https://ng-complete-guide-1bc8e-default-rtdb.europe-west1.firebasedatabase.app/houses.json'
    )
    .pipe(
        // map(houses => {
        //     return houses.map(house => {
        //         return {
        //             ...house,
        //             basketRows: house.basketRows ? house.basketRows: []
        //         };
        //     });
        // }),
        tap(houses => {
            this.shoppingListService.setHouses(houses);
        })
    )
}

fetchItems() {
    console.log('in fetchItems')
    return this.http
    .get<Item[]>(
        'https://ng-complete-guide-1bc8e-default-rtdb.europe-west1.firebasedatabase.app/items.json'
    )
    .pipe(
        tap(items => {
            this.shoppingListService.setItems(items);
        })
    )
}

fetchOrders() {
    return this.http
    .get<Order[]>(
        'https://ng-complete-guide-1bc8e-default-rtdb.europe-west1.firebasedatabase.app/orders.json'
    )
    .pipe(
        tap(orders => {
            this.shoppingListService.setOrders(orders);
        })
    )
}
}
