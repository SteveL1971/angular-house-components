import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../shared/item.model'
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  defaultCategory: string = "";
  chosenCategory: string = "";
  source:string = "items"
  items: Item[] = [];

  // items : Item[] = [
  //   new Item(1, 'Wall', 'brick', 'high quality bricks', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bricks-4172.jpg/800px-Bricks-4172.jpg?20100221002743', 1999),
  //   new Item(2, 'Wall', 'panel', 'pine wood paneling', 'https://www.maxpixel.net/static/photo/1x/Board-Planks-Wood-Wood-Plank-Texture-Wall-Wooden-3511802.jpg', 2999),
  //   new Item(3, 'Floor', 'laminate', 'stylish laminate flooring', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Laminaat.jpg/800px-Laminaat.jpg?20071101200304', 299),
  //   new Item(4, 'Floor', 'plank', 'lavish oak plank', 'https://upload.wikimedia.org/wikipedia/commons/7/71/LightningVolt_Wood_Floor.jpg?20051226104611', 699),
  //   new Item(5, 'Window', '3-glass', 'Energy saving windows','https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Fen%C3%AAtre_%C3%A0_l%27australienne_-_Awning_window_-_%28AWS_Magnum_616%29_Light.jpg/342px-Fen%C3%AAtre_%C3%A0_l%27australienne_-_Awning_window_-_%28AWS_Magnum_616%29_Light.jpg?20160217012622',3999),
  //   new Item(6, 'Ceiling', 'tiled', 'Ornate tiled ceiling','https://upload.wikimedia.org/wikipedia/commons/e/ef/Evangeline-ceiling-tiles.jpg',999)
  // ];

  uniqueCategories: string[] = [];
  selectedValue: string = "";

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.items = this.shoppingListService.getItems();
    this.uniqueCategories = [...new Set(this.items.map(item => item.category))];
    this.uniqueCategories.unshift('All categories')
    this.defaultCategory = this.uniqueCategories[0]
  }

  onSubmit(form : NgForm) {
    this.chosenCategory = form.value.category;
  }

  onResetFilter() {
    this.chosenCategory="";
  }

}
