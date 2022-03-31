import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/shared/item.model';
import { ShoppingListService } from 'src/app/shopping-list.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  @ViewChild('f') itemForm!: NgForm;
  items: Item[] = [];
  uniqueCategories: string[] = [];
  defaultCategory: string = "Wall";
  chosenCategory: string = "";
  item: Item = {
    id: 0,
    category: '',
    name: '',
    description: '',
    imageUrl: '',
    price: 0,
  }
  submitted = false;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.items = this.shoppingListService.getItems();
    this.uniqueCategories = [...new Set(this.items.map(item => item.category))];
  }

  onSubmit() {

    this.submitted=true;

    this.item.id = this.shoppingListService.getItems().length + 1;
    this.item.category = this.itemForm.value.itemData.category;
    this.item.name = this.itemForm.value.itemData.name;
    this.item.description = this.itemForm.value.itemData.description;
    this.item.imageUrl = this.itemForm.value.itemData.imageUrl;
    this.item.price = this.itemForm.value.itemData.price;

    this.shoppingListService.createItem(this.item);
    this.itemForm.reset();
  }

}
