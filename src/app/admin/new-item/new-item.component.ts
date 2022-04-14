import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Item } from 'src/app/shared/item.model';
import { ShoppingListService } from 'src/app/shopping-list.service';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  @ViewChild('f') itemForm!: NgForm;
  items: Item[] = [];
  uniqueCategories: string[] = [];
  defaultCategory: string = "";
  chosenCategory: string = "";

  submitted = false;

  constructor(private shoppingListService: ShoppingListService,
              private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.items = this.shoppingListService.getItems();
    this.uniqueCategories = [...new Set(this.items.map(item => item.category))];
    this.defaultCategory = this.uniqueCategories[0]
  }

  onSubmit() {
    let category = ""

    if(this.itemForm.value.itemData.newCategory!==""){
      category = this.itemForm.value.itemData.newCategory;
    } else {
      category = this.itemForm.value.itemData.category;
    }
    
    const item = new Item(
      UUID.UUID(),
      category,
      this.itemForm.value.itemData.name,
      this.itemForm.value.itemData.description,
      this.itemForm.value.itemData.imageUrl,
      this.itemForm.value.itemData.price
    );

    this.shoppingListService.createItem(item);
    this.dataStorageService.storeItems();
    this.dataStorageService.fetchItems();
    this.itemForm.reset();
    this.submitted=true;
  }
}
