import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Item } from 'src/app/shared/item.model';
import { ShoppingListService } from 'src/app/shopping-list.service';
import { UUID } from 'angular2-uuid';
import { Router } from '@angular/router';

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
  // defaultItem: string = this.shoppingListService.getItems()[0].name;
  chosenCategory: string = "";
  item: Item = {
    id: "",
    category: '',
    name: '',
    description: '',
    imageUrl: '',
    price: 0,
  }
  submitted = false;

  constructor(private shoppingListService: ShoppingListService,
              private router:Router,
              private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.items = this.shoppingListService.getItems();
    this.uniqueCategories = [...new Set(this.items.map(item => item.category))];
    this.defaultCategory = this.uniqueCategories[0]
  }

  onSubmit() {

    this.submitted=true;
    this.item.id = UUID.UUID();

    if(this.itemForm.value.itemData.newCategory!==""){
      this.item.category = this.itemForm.value.itemData.newCategory;
    } else {
      this.item.category = this.itemForm.value.itemData.category;
    }
    
    this.item.name = this.itemForm.value.itemData.name;
    this.item.description = this.itemForm.value.itemData.description;
    this.item.imageUrl = this.itemForm.value.itemData.imageUrl;
    this.item.price = this.itemForm.value.itemData.price;

    this.shoppingListService.createItem(this.item);
    this.dataStorageService.storeItems();
    this.dataStorageService.fetchItems();

    this.itemForm.reset();
    // this.router.navigate(['/admin'])
  }

}
