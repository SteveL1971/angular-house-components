import { Component, Input, OnInit } from '@angular/core';
import { BasketRow } from 'src/app/shared/basket-row';

@Component({
  selector: 'app-houses-item-rows',
  templateUrl: './houses-item-rows.component.html',
  styleUrls: ['./houses-item-rows.component.css']
})
export class HousesItemRowsComponent implements OnInit {

  @Input() basketRow: BasketRow = {
    amount: 0,
    item: {
        id: "",
        name: "",
        category: "",
        description: "",
        imageUrl: "",
        price: 0
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
