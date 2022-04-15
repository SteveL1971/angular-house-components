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

  @ViewChild('f') houseForm!: NgForm;

  submitted: boolean = false;
  houseDeleted=false;
  houseEdited=false;
  defaultCategory: string = "";
  chosenCategory: string = "";
  selectedValue = "";
  selectedValueCategory = "";
  defaultHouse: string = "";
  names: string[] = [];
  houses: House[] = [];
  items: Item[] = [];
  uniqueCategories: string[] = [];
  chosenHouseName: string = "";
  chosenHouse = <House>{ };
  collapse:boolean=true;
  reset=true;
  source: string = "edit-house";
  houseIndex: number = 0;

  constructor(private shoppingListService: ShoppingListService,
              private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.houses = this.shoppingListService.getHouses();
    this.names = [...new Set(this.houses.map(house => house.name))];
    this.items = this.shoppingListService.getItems();
    this.uniqueCategories = [...new Set(this.items.map(item => item.category))];
    this.uniqueCategories.unshift('All categories')
    this.defaultCategory = this.uniqueCategories[0]
  }

  onChange(chosenHouse : string) {
    this.chosenHouseName = chosenHouse;
    this.houseIndex = this.houses.findIndex(house => house.name === this.chosenHouseName );
    this.chosenHouse = this.houses[this.houseIndex]
    this.loadChosenHouse(this.chosenHouse)
    this.collapse=false;
    this.reset=!this.reset;
    this.source= this.houseIndex.toString();
    this.shoppingListService.resetNewHouseBasketRows();
  }

  onSubmit() {
    const house = new House(
      this.chosenHouse.id,
      this.houseForm.value.houseData.name,
      1,
      this.houseForm.value.houseData.imageUrl,
      this.houseForm.value.houseData.description,
      this.shoppingListService.getNewHouseBasketRows(),
    );
    this.shoppingListService.updateHouse(house);
    
    this.dataStorageService.storeHouses();
    this.submitted=true;
    this.houseEdited=true;
    this.resetForms();
  }

  onDeleteHouse() {
    this.shoppingListService.deleteHouse(this.chosenHouse.id);
    this.dataStorageService.storeHouses();
    this.submitted=true;
    this.houseDeleted=true;
    this.resetForms();
  }

  resetForms() {
    this.houseForm.reset();
    this.houses = this.shoppingListService.getHouses();
    this.names = [...new Set(this.houses.map(house => house.name))];
    this.defaultHouse = this.shoppingListService.getHouses()[0].name;
    this.selectedValue = "";
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
