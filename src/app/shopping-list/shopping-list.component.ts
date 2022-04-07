import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasketRow } from '../shared/basket-row';
import { DataStorageService } from '../shared/data-storage.service';
import { House } from '../shared/house.model';
import { Item } from '../shared/item.model';
import { Order } from '../shared/order.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  slChangeSub = new Subscription;
  slhChangeSub = new Subscription;
  shoppingList: BasketRow[] = [];
  shoppingListHouses: House[] = [];
  totalPrice: number = 0;
  houseSpelling = "house";
  collapse: boolean = false;
  collapseIcon: string = "+";
  // order: Order = new Order(0,0,[new House("","", 0, "" , "", [new BasketRow(new Item(0,"","","","",0),0)])] )
  order: Order = new Order('', 0,0,[new House("","", 0, "" , "", [new BasketRow(new Item("","","","","",0),0)])], [new BasketRow(new Item("","","","","",0),0)] )
  orders: Order[] = []
  orderMall: Order = new Order('',0,0,[new House("","", 0, "" , "", [new BasketRow(new Item("","","","","",0),0)])], [new BasketRow(new Item("","","","","",0),0)] )
  basketRowMall: BasketRow = new BasketRow(new Item("","","","","",0),0)
  itemMall: Item = new Item("","","","","",0)
  looseItems: House = new House("","Separate Items", 0, "" , "", [new BasketRow(new Item("","","","","",0),0)])

  constructor(private shoppingListService: ShoppingListService,
              private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
  
    this.shoppingList = this.shoppingListService.getShoppingBasket();
    this.shoppingListHouses = this.shoppingListService.getShoppingBasketHouses();

    this.slChangeSub = this.shoppingListService.shoppingBasketChanged
    .subscribe(
      (shoppingBasket: BasketRow[]) => {
      this.shoppingList = shoppingBasket;
    })

    this.slhChangeSub = this.shoppingListService.shoppingBasketHousesChanged
    .subscribe(
      (shoppingBasketHouses: House[]) => {
      this.shoppingListHouses = shoppingBasketHouses;
    })

    this.order.houses.length=0
    this.order.basketRows.length=0
  }

  countTotalPrice() {
    this.totalPrice = 0;
    for (let i = 0; i < this.shoppingList.length; i++) {
      this.totalPrice += this.shoppingList[i].item.price*this.shoppingList[i].amount;
    }

    for (let i = 0; i < this.shoppingListHouses.length; i++) {
      for (let j = 0; j < this.shoppingListHouses[i].basketRows.length; j++) {
        this.totalPrice += this.shoppingListHouses[i].amount*this.shoppingListHouses[i].basketRows[j].item.price*this.shoppingListHouses[i].basketRows[j].amount;
      }
    }
    return this.totalPrice;
  }

  onAddHouseToCart(i: number) {
    this.shoppingListService.addSingleHouse(this.shoppingListHouses[i])
  }

  onRemoveHouseFromCart(i: number) {
    this.shoppingListService.removeSingleHouse(i)
  }

  onRemoveHouseRowFromCart(i: number) {
    this.shoppingListService.removeHouseRow(i)
  }

  spelling(amount: number) {
    if(amount>1) {
      this.houseSpelling="houses";
    } else {
      this.houseSpelling="house"; 
    };
    return this.houseSpelling; 
  };

  onCollapse() {
    this.collapse = !this.collapse;
    if (this.collapseIcon==="+"){
      this.collapseIcon="-";
    } else {
      this.collapseIcon="+";
    }
  };

  ngOnDestroy(): void {
    this.slChangeSub.unsubscribe();
  }

  totalSingleHousePrice(i: number) {
    return this.shoppingListService.countSingleHousePrice(i);
  }

  onCreateOrder() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData') || '{}');
    
    this.order.userId = userData.id
    this.order.id = this.shoppingListService.getOrders().length + 1;
    this.order.amount = this.countTotalPrice()
    this.order.houses.length=0
    this.order.basketRows.length=0

    for (let i = 0; i < this.shoppingListHouses.length; i++) {
      this.order.houses.push(new House(
        this.shoppingListHouses[i].id,
        this.shoppingListHouses[i].name,
        this.shoppingListHouses[i].amount,
        this.shoppingListHouses[i].imageUrl,
        this.shoppingListHouses[i].description,
        this.shoppingListHouses[i].basketRows,
      ))
    }
    for (let i = 0; i < this.shoppingList.length; i++) {
      this.order.basketRows.push(new BasketRow(
        this.shoppingList[i].item,
        this.shoppingList[i].amount,
      ))
    }
    this.shoppingListService.addOrder(this.order);
    this.dataStorageService.storeOrders();
    this.orders = this.shoppingListService.getOrders();
    this.shoppingListService.emptyCart();
    
  }

  getLength() {
    if(this.shoppingList.length>0||this.shoppingListHouses.length>0){
      return true;
    } else {
      return false;
  }
}
}


