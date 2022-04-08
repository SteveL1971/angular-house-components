import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { House } from 'src/app/shared/house.model';
import { Item } from 'src/app/shared/item.model';
import { ShoppingListService } from 'src/app/shopping-list.service';

@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.css']
})
export class EditHouseComponent implements OnInit {

  selectedValue = ""

  defaultHouse: string = this.shoppingListService.getHouses()[0].name;
  names: string[] = [];
  houses: House[] = [];
  chosenHouseName: string = "";
  chosenHouse = <House>{ };
  collapse:boolean=true;

  @ViewChild('f2') houseForm!: NgForm;
  @ViewChild('f') filterForm!: NgForm;
  
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
  source: string = "edit-house";
  houseIndex: number = 0;

  constructor(private shoppingListService: ShoppingListService,
              private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.houses = this.shoppingListService.getHouses();
    this.names = [...new Set(this.houses.map(house => house.name))];

    this.items = this.shoppingListService.getItems();
    this.uniqueCategories = [...new Set(this.items.map(item => item.category))];
  }

  // onSubmit1(form : NgForm) {
  onChange(chosenHouse : string) {
    this.chosenHouseName = chosenHouse;
    this.houseIndex = this.houses.findIndex(element => element.name === this.chosenHouseName );
    this.chosenHouse = this.houses[this.houseIndex]
    this.loadChosenHouse(this.chosenHouse)
    this.collapse=false;
    this.reset=!this.reset;
    this.source= this.houseIndex.toString();
    this.shoppingListService.resetNewHouseBasketRows();
  }

  onSubmit2() {
    this.submitted=true;

    this.house.id = this.chosenHouse.id;
    this.house.name = this.houseForm.value.houseData.name;
    this.house.description = this.houseForm.value.houseData.description;
    this.house.imageUrl = this.houseForm.value.houseData.imageUrl;
    this.house.basketRows = this.shoppingListService.getNewHouseBasketRows();
    this.house.amount = 1;
    
    this.shoppingListService.updateHouse(this.house);
    this.dataStorageService.storeHouses();
    this.resetForms();
  }

  onDeleteHouse() {
    this.house.id = this.chosenHouse.id;
    this.shoppingListService.deleteHouse(this.house.id);
    this.dataStorageService.storeHouses();
    this.resetForms();
  }

  resetForms() {
    this.houseForm.reset();
    this.houses = this.shoppingListService.getHouses();
    this.names = [...new Set(this.houses.map(house => house.name))];
    this.defaultHouse = this.shoppingListService.getHouses()[0].name;
    this.collapse=true;
  }

  loadChosenHouse(house: House) {

    this.houseForm.setValue({
      houseData: {
        name: house.name,
        description: house.description,
        imageUrl: house.imageUrl,
      },
    });
  }



}
