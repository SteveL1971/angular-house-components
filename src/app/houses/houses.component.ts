import { Component, OnInit } from '@angular/core';
import { House } from '../shared/house.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})

export class HousesComponent implements OnInit {

  selectedValue: string = ""; 
  collapse: boolean = true;
  houses: House[] = []
  uniqueHouses: string[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.houses = this.shoppingListService.getHouses();
    this.uniqueHouses = [...new Set(this.houses.map(item => item.name))];
    this.uniqueHouses.unshift('All houses')
  }

}
