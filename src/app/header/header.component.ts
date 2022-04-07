import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../shopping-list.service';
import { faArrowDownUpAcrossLine, faCartShopping, faHouse } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { User } from '../auth/user.model';
import { Role } from '../shared/role.model';

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
  rolesChangeSub: Subscription = new Subscription;
  faCartShopping = faCartShopping;
  faHouse = faHouse;
  role:string = "customer"
  roles: Role[] = [];
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

    this.rolesChangeSub = this.shoppingListService.rolesChanged
    .subscribe(
      (roles: Role[]) => {
        const found = roles.find(role => role.id === this.userId);
        if(found){
          this.role = found.role
        };
    })

    this.userSub = this.authService.user.subscribe(
      user => {
        this.isAuthenticated = user.id!=="" ? true : false;
        this.userId = user.id;
      });

    // this.userSub = this.dataStorageService.roles.subscribe();
  
      const userData: {
        email: string;
        id: string;
        _token: string;
        _tokenExpirationDate: string;
      } = JSON.parse(localStorage.getItem('userData') || '{}');
      
      this.userId = userData.id

  }


  onToggleUser() {

    // <li class="margin-right"><button class="btn btn-primary" type="button" (click)="onToggleUser()">toggle role</button> </li>

    // const found = this.shoppingListService.getRoles().find(role => role.id === this.userId);
    // if(found && found.role==="admin"){
    //   if(this.role==="customer"){
    //     this.role="admin";
    //   } else {
    //     this.role="customer";
    //     this.router.navigate(['/']);
    //   };  
    // }
  }

  onLogout() {
    this.authService.logout();
    this.role="customer";
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
