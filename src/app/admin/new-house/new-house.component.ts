import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { House } from 'src/app/shared/house.model';
import { Item } from 'src/app/shared/item.model';
import { ShoppingListService } from 'src/app/shopping-list.service';

@Component({
  selector: 'app-new-house',
  templateUrl: './new-house.component.html',
  styleUrls: ['./new-house.component.css']
})
export class NewHouseComponent implements OnInit {

  @ViewChild('f') houseForm!: NgForm;
  houses: House[] = [];
  items: Item[] = [];
  uniqueCategories: string[] = [];
  reset=true;

  house: House = {
    id: 0,
    name: '',
    amount: 0,
    imageUrl: '',
    description: '',
    basketRows: []
  }
  submitted: boolean = false;
  source: string = "new-house"

  constructor(private shoppingListService: ShoppingListService,
              private router: Router) { }

  ngOnInit(): void {
    this.items = this.shoppingListService.getItems();
    this.uniqueCategories = [...new Set(this.items.map(item => item.category))];
  }

  onSubmit() {

    this.submitted=true;

    this.house.id = this.shoppingListService.getHouses().length + 1;
    this.house.name = this.houseForm.value.houseData.name;
    this.house.amount = 1;
    this.house.imageUrl = this.houseForm.value.houseData.imageUrl;
    this.house.description = this.houseForm.value.houseData.description;
    this.house.basketRows = this.shoppingListService.getNewHouseBasketRows();

    this.shoppingListService.addHouse(this.house);

    this.houseForm.reset();
    this.shoppingListService.resetNewHouseBasketRows();
    this.reset=!this.reset;
  }

}
