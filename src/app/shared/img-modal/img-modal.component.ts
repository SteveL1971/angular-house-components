import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-img-modal',
  templateUrl: './img-modal.component.html',
  styleUrls: ['./img-modal.component.css']
})
export class ImgModalComponent implements OnInit {
  @Input() item: Item = {
    id: "",
    name: "",
    category: "",
    description: "",
    imageUrl: "",
    price: 0
  };

  constructor(private shoppingListService: ShoppingListService) {}
  @Output() hideModal = new EventEmitter<boolean>();
 
  ngOnInit(): void {
  }

  onCloseModal() {
    this.hideModal.emit(false);
  }

 onAddItemToCart() {
  this.shoppingListService.addItem(this.item,1);
  }

}
