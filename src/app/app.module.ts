import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemsComponent } from './items/items.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemListItemsComponent } from './items/item-list/item-list-items/item-list-items.component';
import { HousesComponent } from './houses/houses.component';
import { ShoppingListService } from './shopping-list.service';
import { RowComponent } from './items/item-list/item-list-items/row/row.component';
import { ImgModalComponent } from './shared/img-modal/img-modal.component';
import { HousesListComponent } from './houses/houses-list/houses-list.component';
import { ShoppingListRowsComponent } from './shopping-list/shopping-list-rows/shopping-list-rows.component';
import { HouseMainComponent } from './houses/house-main/house-main.component';
import { ShoppingMainComponent } from './shopping-list/shopping-main/shopping-main.component';
import { OrdersComponent } from './orders/orders.component';
import { SingleOrderComponent } from './orders/single-order/single-order.component';
import { OrderHousesComponent } from './orders/single-order/order-houses/order-houses.component';
import { AssistComponent } from './assist/assist.component';
import { AdminComponent } from './admin/admin.component';
import { EditItemComponent } from './admin/edit-item/edit-item.component';
import { EditHouseComponent } from './admin/edit-house/edit-house.component';
import { NewItemComponent } from './admin/new-item/new-item.component';
import { NewHouseComponent } from './admin/new-house/new-house.component';
import { AuthComponent } from './auth/auth.component';
import { ShoppingListHouseRowsComponent } from './shopping-list/shopping-list-house-rows/shopping-list-house-rows.component';
import { AuthGuard } from './auth-guard.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatBadgeModule} from '@angular/material/badge'; 
import { MatIconModule} from '@angular/material/icon'; 
import { MatButtonModule} from '@angular/material/button'; 
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select'; 
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    ShoppingListComponent,
    ItemListComponent,
    ItemListItemsComponent,
    HousesComponent,
    RowComponent,
    ImgModalComponent,
    HousesListComponent,
    ShoppingListRowsComponent,
    HouseMainComponent,
    ShoppingMainComponent,
    OrdersComponent,
    SingleOrderComponent,
    OrderHousesComponent,
    AssistComponent,
    AdminComponent,
    EditItemComponent,
    EditHouseComponent,
    NewItemComponent,
    NewHouseComponent,
    ShoppingListHouseRowsComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatBadgeModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [
    ShoppingListService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
