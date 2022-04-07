import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../shopping-list.service';
import { faCartShopping, faHouse } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  itemsInCart: number = 0;
  housesInCart: number = 0;
  userSub: Subscription = new Subscription;
  itemsInCartChangeSub: Subscription = new Subscription;
  housesInCartChangeSub: Subscription = new Subscription;
  faCartShopping = faCartShopping;
  faHouse = faHouse;
  role:string = "customer"
  userId:string ="";

  // public email: string,
  // public id: string,
  // private _token: string,
  // private _tokenExpirationDate: Date
  

  constructor(private shoppingListService: ShoppingListService,
              private dataStorageService : DataStorageService, 
              private authService: AuthService,
              private router: Router) { }

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
    this.userSub = this.authService.user.subscribe(
      user => {
        this.isAuthenticated = user.id!=="" ? true : false;
        console.log('!!user', !!user)
      });
  
      const userData: {
        email: string;
        id: string;
        _token: string;
        _tokenExpirationDate: string;
      } = JSON.parse(localStorage.getItem('userData') || '{}');
      
      this.userId = userData.id

  }

  onToggleUser() {
    if(this.role==="customer"){
      this.role="admin";
      this.authService.loginToggle();
      
    } else {
      this.role="customer";
      this.authService.loginToggle();
      this.router.navigate(['/']);
    }; 
  }

  onLogout() {
    this.authService.logout();
  }

  onSaveHouses() {
    this.dataStorageService.storeHouses();
  }

  onFetchHouses() {
    this.dataStorageService.fetchHouses().subscribe();
  }
  onSaveItems() {
    this.dataStorageService.storeItems();
  }

  onFetchItems() {
    this.dataStorageService.fetchItems().subscribe();
  }
  
  ngOnDestroy(): void {
      this.itemsInCartChangeSub.unsubscribe();
      this.housesInCartChangeSub.unsubscribe();
      this.userSub.unsubscribe();
  }

}
