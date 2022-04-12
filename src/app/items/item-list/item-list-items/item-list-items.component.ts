import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { BasketRow } from 'src/app/shared/basket-row';
import { DataStorageService } from 'src/app/shared/data-storage.service';
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
  @Input() item: Item = new Item('', '', '', '', '', 0);
 
  shoppingBasket: BasketRow[] = [];
  showModal: boolean = false;
  collapse: boolean = true;
  collapseIcon: string = "+";

  constructor(private shoppingListService: ShoppingListService,
              private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.shoppingBasket=this.shoppingListService.getShoppingBasket();
    this.source=this.source
  }

  ngOnChanges() {
    this.collapse=true;
    
   } 

  onAddItemToCart(i: number) {
    this.shoppingListService.addItem(this.items[i],1);
    this.dataStorageService.storeShoppingBasket();
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
