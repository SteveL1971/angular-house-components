import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Item } from 'src/app/shared/item.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { ShoppingListService } from 'src/app/shopping-list.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})

export class EditItemComponent implements OnInit {

  @ViewChild('f') itemForm!: NgForm;
  defaultItem: string = this.shoppingListService.getItems()[0].name;
  submitted = false;
  itemEdited=false;
  itemDeleted=false;
  chosenItem = <Item>{ };
  chosenItemName: string = "";
  selectedValue: string ="";
  collapse:boolean=true;
  defaultCategory: string = "";
  items: Item[] = [];
  names: string[] = [];
  uniqueCategories: string[] = [];

  constructor(private shoppingListService: ShoppingListService,
              private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.items = this.shoppingListService.getItems();
    this.names = [...new Set(this.items.map(item => item.name))];
    this.uniqueCategories = [...new Set(this.items.map(item => item.category))];
  }

  onChange(chosenItem : string) {
    this.chosenItemName = chosenItem;
    const found = this.items.findIndex(element => element.name === this.chosenItemName );
    this.chosenItem = this.items[found]
    this.loadChosenItem(this.chosenItem)
    this.collapse=false;
  }

  onSubmit() {
    const item = new Item(
      this.chosenItem.id,
      this.itemForm.value.itemData.category,
      this.itemForm.value.itemData.name,
      this.itemForm.value.itemData.description,
      this.itemForm.value.itemData.imageUrl,
      this.itemForm.value.itemData.price
    );
    this.shoppingListService.updateItem(item);
    this.dataStorageService.storeItems();
    
    this.submitted=true;
    this.itemEdited=true;
    this.resetForms();
  }

  onDeleteItem() {
    this.shoppingListService.deleteItem(this.chosenItem.id);
    this.dataStorageService.storeItems();

    this.submitted=true;
    this.itemDeleted=true;
    this.resetForms(); 
  }

  loadChosenItem(item: Item) {
    this.itemForm.setValue({
      itemData: {
        category: item.category,
        name: item.name,
        description: item.description,
        imageUrl: item.imageUrl,
        price: item.price
      },
    });
  }

  resetForms() {
    this.itemForm.reset();
    this.items = this.shoppingListService.getItems();
    this.names = [...new Set(this.items.map(item => item.name))];
    this.uniqueCategories = [...new Set(this.items.map(item => item.category))];
    this.defaultItem= this.shoppingListService.getItems()[0].name;
    this.collapse=true;
    this.selectedValue="";
  }

}
