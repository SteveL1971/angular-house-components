import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistComponent } from './assist/assist.component';
import { HousesComponent } from './houses/houses.component';
import { ItemsComponent } from './items/items.component';
import { OrdersComponent } from './orders/orders.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  { path: 'items', component: ItemsComponent }, 
  { path: 'shopping-list', component: ShoppingListComponent }, 
  { path: 'houses', component: HousesComponent }, 
  { path: 'orders', component: OrdersComponent }, 
  { path: 'assist', component: AssistComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
