import { Component, OnInit, ViewChild } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { NgForm } from '@angular/forms';

import { House } from 'src/app/shared/house.model';
import { Item } from 'src/app/shared/item.model';
import { ShoppingListService } from 'src/app/shopping-list.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-new-house',
  templateUrl: './new-house.component.html',
  styleUrls: ['./new-house.component.css']
})

export class NewHouseComponent implements OnInit {

  @ViewChild('f') houseForm!: NgForm;
  selectedValue = ""
  items: Item[] = [];
  uniqueCategories: string[] = [];
  reset=true;
  submitted: boolean = false;
  source: string = "new-house";

  constructor(private shoppingListService: ShoppingListService,
              private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.items = this.shoppingListService.getItems();
    this.uniqueCategories = [...new Set(this.items.map(item => item.category))];
    this.uniqueCategories.unshift('All categories')
    this.shoppingListService.resetNewHouseBasketRows();
  }

  onSubmit() {

    const house = new House (
      UUID.UUID(),
      this.houseForm.value.houseData.name,
      1,
      this.houseForm.value.houseData.imageUrl,
      this.houseForm.value.houseData.description,
      this.shoppingListService.getNewHouseBasketRows()
    )

    this.shoppingListService.addHouse(house);
    this.dataStorageService.storeHouses();
    this.dataStorageService.fetchHouses();
    this.houseForm.reset();
    this.shoppingListService.resetNewHouseBasketRows();
    this.reset=!this.reset;
    this.submitted=true;
  }

}
