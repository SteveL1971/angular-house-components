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
    AssistComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
