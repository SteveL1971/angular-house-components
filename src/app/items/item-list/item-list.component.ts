import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/shared/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, OnChanges {
  @Input() category: string ="";
  @Input() items: Item[] =[];
  @Input() item: Item = new Item('', '', '', '', '', 0);
  @Input() uniqueCategories: string[] =[];
  @Input() chosenCategory: string = "";
  @Input() source: string = "";
  @Input() reset: boolean = true;
  @Input() houseIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
  }



}
