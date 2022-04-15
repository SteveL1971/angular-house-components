import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../auth/user.model';
import { BasketRow } from '../shared/basket-row';
import { House } from '../shared/house.model';
import { ShoppingListService } from '../shopping-list.service';

interface IUserMsg {
  username: string;
  email: string;
  question: string;
  message: string;
  shoppingList: BasketRow[];
  shoppingListHouses: House[];
}

@Component({
  selector: 'app-assist',
  templateUrl: './assist.component.html',
  styleUrls: ['./assist.component.css']
})
export class AssistComponent implements OnInit {
  
  @ViewChild('f') assistForm!: NgForm;
  
  mobile:boolean=false;
  defaultQuestion = 'house design';
  attach: boolean = false;
  shoppingList: BasketRow[] = [];
  shoppingListHouses: House[] = [];
  showButtons: boolean = false;

  submitted = false;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    if (window.screen.width >= 768) { // 768px portrait
      this.mobile = false;
    } else {
      this.mobile = true;
    }
    this.shoppingList = this.shoppingListService.getShoppingBasket();
    this.shoppingListHouses = this.shoppingListService.getShoppingBasketHouses();
  }

  onSubmit() {

    const userMsg: IUserMsg = {
      username: this.assistForm.value.userData.username,
      email: this.assistForm.value.userData.email,
      question: this.assistForm.value.userData.question,
      message: this.assistForm.value.userData.message,
      shoppingList: this.assistForm.value.userData.attach? this.shoppingList : [],
      shoppingListHouses: this.assistForm.value.userData.attach? this.shoppingListHouses : []
    }

    console.log(userMsg)

    this.submitted=true;
    this.assistForm.reset();
  }
}
