import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { BasketRow } from 'src/app/shared/basket-row';
import { Item } from 'src/app/shared/item.model';
import { ShoppingListService } from 'src/app/shopping-list.service';

@Component({
  selector: 'app-item-list-items',
  templateUrl: './item-list-items.component.html',
  styleUrls: ['./item-list-items.component.css']
  
})
export class ItemListItemsComponent implements OnInit, OnChanges {
  @Input() category: string = "";
  @Input() source: string = "";
  @Input() items: Item[] = [];
  @Input() reset: boolean = false;
 
  shoppingBasket: BasketRow[] = [];
  showModal: boolean = false;
  collapse: boolean = true;
  collapseIcon: string = "+";

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.shoppingBasket=this.shoppingListService.getShoppingBasket();
  }

  ngOnChanges() {
    this.collapse=true;
   } 

  onAddItemToCart(i: number) {
    this.shoppingListService.addItem(this.items[i],1);
  }

  onImageClick() {
    this.showModal=!this.showModal;
 }



 onCollapse() {
  this.collapse=!this.collapse;
  if (this.collapseIcon==="+"){
    this.collapseIcon="-";
  } else {
    this.collapseIcon="+";
  }
 }

}
