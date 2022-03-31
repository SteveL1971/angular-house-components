import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../shopping-list.service';
import { faCartShopping, faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  itemsInCart: number = 0;
  housesInCart: number = 0;
  itemsInCartChangeSub = new Subscription;
  housesInCartChangeSub = new Subscription;
  faCartShopping = faCartShopping;
  faHouse = faHouse;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.itemsInCartChangeSub = this.shoppingListService.itemsInCart
    .subscribe(
      (itemsInCart: number) => {
      this.itemsInCart = itemsInCart;
    })
    this.housesInCartChangeSub = this.shoppingListService.housesInCart
    .subscribe(
      (housesInCart: number) => {
      this.housesInCart = housesInCart;
    })
  }
  

  ngOnDestroy(): void {
      this.itemsInCartChangeSub.unsubscribe();
      this.housesInCartChangeSub.unsubscribe();
  }

}
