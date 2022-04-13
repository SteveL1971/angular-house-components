import {  Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-live4real';

  constructor(private authService: AuthService,
              private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
    this.authService.autoLogin();
    if(this.authService.user.value.id!==""){
        this.dataStorageService.fetchHouses().subscribe();
        this.dataStorageService.fetchItems().subscribe();
        this.dataStorageService.fetchOrders().subscribe();
        this.dataStorageService.fetchRoles().subscribe();
        this.dataStorageService.fetchShoppingBasket().subscribe();
        this.dataStorageService.fetchShoppingBasketHouses().subscribe();
    }
  }

}



