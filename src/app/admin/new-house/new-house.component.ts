import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { House } from 'src/app/shared/house.model';
import { Item } from 'src/app/shared/item.model';
import { ShoppingListService } from 'src/app/shopping-list.service';
import { UUID } from 'angular2-uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-house',
  templateUrl: './new-house.component.html',
  styleUrls: ['./new-house.component.css']
})
export class NewHouseComponent implements OnInit {
  defaultCategory: string = "";
  chosenCategory: string = "";
  selectedValue = ""

  @ViewChild('f') houseForm!: NgForm;
  houses: House[] = [];
  items: Item[] = [];
  uniqueCategories: string[] = [];
  reset=true;

  house: House = {
    id: '',
    name: '',
    amount: 0,
    imageUrl: '',
    description: '',
    basketRows: []
  }
  submitted: boolean = false;
  source: string = "new-house";

  constructor(private shoppingListService: ShoppingListService,
              private router: Router,
              private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.items = this.shoppingListService.getItems();
    this.uniqueCategories = [...new Set(this.items.map(item => item.category))];
    this.uniqueCategories.unshift('All categories')
    this.defaultCategory = this.uniqueCategories[0]
    this.shoppingListService.resetNewHouseBasketRows();
  }

  onSubmit() {

    this.submitted=true;

    // this.house.id = this.shoppingListService.getHouses().length + 1;
    this.house.id = UUID.UUID();
    this.house.name = this.houseForm.value.houseData.name;
    this.house.amount = 1;
    this.house.imageUrl = this.houseForm.value.houseData.imageUrl;
    this.house.description = this.houseForm.value.houseData.description;

    this.house.basketRows = this.shoppingListService.getNewHouseBasketRows();

    this.shoppingListService.addHouse(this.house);
    this.dataStorageService.storeHouses();
    this.dataStorageService.fetchHouses();

    this.houseForm.reset();
    this.shoppingListService.resetNewHouseBasketRows();
    this.reset=!this.reset;
    this.router.navigate(['/admin'])
  }

}
