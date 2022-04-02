import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EditHouseComponent } from './admin/edit-house/edit-house.component';
import { EditItemComponent } from './admin/edit-item/edit-item.component';
import { NewHouseComponent } from './admin/new-house/new-house.component';
import { NewItemComponent } from './admin/new-item/new-item.component';
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
  { path: 'assist', component: AssistComponent },
  // { path: 'admin', component: AdminComponent },
  
  { path: 'admin',
  component: AdminComponent,
  children: [
    { path: 'new-item', component: NewItemComponent },
    { path: 'new-house', component: NewHouseComponent },
    { path: 'edit-item', component: EditItemComponent },
    { path: 'edit-house', component: EditHouseComponent }
] }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
