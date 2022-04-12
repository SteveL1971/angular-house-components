import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { ShoppingListService } from '../shopping-list.service';
import { House } from './house.model';
import { Item } from './item.model';
import { Order } from './order.model';
import { Role } from './role.model';
import { BasketRow } from './basket-row';

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

  storeRoles() {
    const roles = this.shoppingListService.getRoles()
    this.http
      .put(
        'https://ng-complete-guide-1bc8e-default-rtdb.europe-west1.firebasedatabase.app/roles.json',
        roles
      )
      .subscribe(response => {
        console.log(response);
      });
    }
  storeShoppingBasket() {
    const shoppingBasket = this.shoppingListService.getShoppingBasket()
    this.http
      .put(
        'https://ng-complete-guide-1bc8e-default-rtdb.europe-west1.firebasedatabase.app/shopping-basket.json',
        shoppingBasket
      )
      .subscribe(response => {
        console.log(response);
      });
    }

  storeShoppingBasketHouses() {
    const shoppingBasketHouses = this.shoppingListService.getShoppingBasketHouses()
    this.http
      .put(
        'https://ng-complete-guide-1bc8e-default-rtdb.europe-west1.firebasedatabase.app/shopping-basket-houses.json',
        shoppingBasketHouses
      )
      .subscribe(response => {
        console.log(response);
      });
    }


fetchHouses() {
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

fetchRoles() {
    return this.http
    .get<Role[]>(
        'https://ng-complete-guide-1bc8e-default-rtdb.europe-west1.firebasedatabase.app/roles.json'
    )
    .pipe(
        tap(roles => {
            this.shoppingListService.setRoles(roles);
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
fetchShoppingBasketHouses() {
    return this.http
    .get<House[]>(
        'https://ng-complete-guide-1bc8e-default-rtdb.europe-west1.firebasedatabase.app/shopping-basket-houses.json'
    )
    .pipe(
        tap(houses => {
            this.shoppingListService.setShoppingBasketHouses(houses);
        })
    )
}

fetchShoppingBasket() {
    return this.http
    .get<BasketRow[]>(
        'https://ng-complete-guide-1bc8e-default-rtdb.europe-west1.firebasedatabase.app/shopping-basket.json'
    )
    .pipe(
        tap(basketRows => {
            this.shoppingListService.setShoppingBasket(basketRows);
        })
    )
}

}
