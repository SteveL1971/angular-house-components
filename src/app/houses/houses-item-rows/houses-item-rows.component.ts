import { Component, Input, OnInit } from '@angular/core';
import { BasketRow } from 'src/app/shared/basket-row';
import { Item } from 'src/app/shared/item.model';

@Component({
  selector: 'app-houses-item-rows',
  templateUrl: './houses-item-rows.component.html',
  styleUrls: ['./houses-item-rows.component.css']
})
export class HousesItemRowsComponent implements OnInit {

  @Input() basketRow: BasketRow = new BasketRow(new Item("","","","","",0),0)

  constructor() { }

  ngOnInit(): void {
  }

}
