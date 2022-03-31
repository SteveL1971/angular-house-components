import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BasketRow } from '../shared/basket-row';
import { House } from '../shared/house.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-assist',
  templateUrl: './assist.component.html',
  styleUrls: ['./assist.component.css']
})
export class AssistComponent implements OnInit {
  @ViewChild('f') assistForm!: NgForm;
  defaultQuestion = 'House design (general)';
  text = '';
  attach: boolean = false;
  shoppingList: BasketRow[] = [];
  shoppingListHouses: House[] = [];
  user = {
    username: '',
    email: '',
    question: '',
    message: '',
    attach: false,
    shoppingList: this.shoppingList,
    shoppingListHouses: this.shoppingListHouses
  }
  submitted = false;

  showButtons: boolean = false;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.shoppingList = this.shoppingListService.getShoppingBasket();
    this.shoppingListHouses = this.shoppingListService.getShoppingBasketHouses();
  }

  onSubmit() {

    this.submitted=true;

    this.user.username = this.assistForm.value.userData.username;
    this.user.email = this.assistForm.value.userData.email;
    this.user.question = this.assistForm.value.question;
    this.user.message = this.assistForm.value.message;
    this.user.attach = this.assistForm.value.attach;

    if(this.user.attach){
      this.user.shoppingList= this.shoppingList
      this.user.shoppingListHouses= this.shoppingListHouses
    } else {
      this.user.shoppingList = [];
      this.user.shoppingListHouses = [];
    }

    this.assistForm.reset();
}
}
