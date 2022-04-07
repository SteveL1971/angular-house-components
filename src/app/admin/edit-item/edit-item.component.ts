import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Item } from 'src/app/shared/item.model';
import { ShoppingListService } from 'src/app/shopping-list.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  @ViewChild('f2') itemForm!: NgForm;
  defaultItem: string = this.shoppingListService.getItems()[0].name;
 
  chosenItem = <Item>{ };
  
  chosenItemName: string = "";

  uniqueCategories: string[] = [];
  defaultCategory: string = "Wall";
  chosenCategory: string = "";
  collapse:boolean=true;
  
  source:string = "items"
  items: Item[] = [];
  submitted = false;
  names: string[] = [];

  item: Item = {
    id: '',
    category: '',
    name: '',
    description: '',
    imageUrl: '',
    price: 0,
  }

  constructor(private shoppingListService: ShoppingListService,
              private router:Router,
              private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.items = this.shoppingListService.getItems();
    this.names = [...new Set(this.items.map(item => item.name))];
    this.uniqueCategories = [...new Set(this.items.map(item => item.category))];
  }

  onSubmit1(form : NgForm) {
    this.chosenItemName = form.value.name;
    const found = this.items.findIndex(element => element.name === this.chosenItemName );
    this.chosenItem = this.items[found]
    this.loadChosenItem(this.chosenItem)
    this.collapse=false;

  }

  onSubmit2() {

    this.submitted=true;

    this.item.id = this.chosenItem.id;
    this.item.category = this.itemForm.value.itemData.category;
    this.item.name = this.itemForm.value.itemData.name;
    this.item.description = this.itemForm.value.itemData.description;
    this.item.imageUrl = this.itemForm.value.itemData.imageUrl;
    this.item.price = this.itemForm.value.itemData.price;
  
    this.shoppingListService.updateItem(this.item);
    this.dataStorageService.storeItems();
    this.resetForms();
    this.collapse=true;
  }

  exitEdit() {
    this.itemForm.reset();
    this.collapse=true;
  }

  onResetFilter() {
    this.chosenItem
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

  onDeleteItem() {
    this.shoppingListService.deleteItem(this.item.id)
    this.dataStorageService.storeItems();
    this.resetForms(); 
  }

  resetForms() {
    this.itemForm.reset();
    this.items = this.shoppingListService.getItems();
    this.names = [...new Set(this.items.map(item => item.name))];
    this.uniqueCategories = [...new Set(this.items.map(item => item.category))];
    this.defaultItem= this.shoppingListService.getItems()[0].name;

    this.collapse=true;
  }

}
