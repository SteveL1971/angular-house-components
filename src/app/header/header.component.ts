import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../shopping-list.service';
import { AuthService } from '../auth/auth.service';
import { Role } from '../shared/role.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userSub: Subscription = new Subscription;
  itemsInCartChangeSub: Subscription = new Subscription;
  housesInCartChangeSub: Subscription = new Subscription;
  rolesChangeSub: Subscription = new Subscription;
  
  isAuthenticated = false;
  itemsInCart: number = 0;
  housesInCart: number = 0;
  role:string = "customer"
  userId:string ="";

  constructor(private shoppingListService: ShoppingListService, 
              private authService: AuthService) { }

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

    this.rolesChangeSub = this.shoppingListService.rolesChanged
    .subscribe(
      (roles: Role[]) => {
        const found = roles.find(role => role.id === this.userId);
        if(found){
          this.role = found.role
        };
    })

    this.userSub = this.authService.user
    .subscribe(
      user => {
        this.isAuthenticated = user.id!=="" ? true : false;
        this.userId = user.id;
      });
  
      const userData: {
        email: string;
        id: string;
        _token: string;
        _tokenExpirationDate: string;
      } = JSON.parse(localStorage.getItem('userData') || '{}');
      
      this.userId = userData.id
  }

  onLogout() {
    this.authService.logout();
    this.role="customer";
    this.shoppingListService.emptyCarts();
  }
  
  ngOnDestroy(): void {
      this.itemsInCartChangeSub.unsubscribe();
      this.housesInCartChangeSub.unsubscribe();
      this.rolesChangeSub.unsubscribe();
      this.userSub.unsubscribe();
  }
}
