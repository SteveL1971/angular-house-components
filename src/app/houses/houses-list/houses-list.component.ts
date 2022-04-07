import { Component, Input, OnInit } from '@angular/core';
import { BasketRow } from 'src/app/shared/basket-row';

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.css']
})
export class HousesListComponent implements OnInit {
  showModal: boolean = false;
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

  onClickImage() {
    this.showModal=!this.showModal;
 }


}
