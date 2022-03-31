import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() category: string ="";
  @Input() items: Item[] =[];
  @Input() uniqueCategories: string[] =[];
  @Input() chosenCategory: string = "";
  @Input() source: string = "";
  @Input() reset: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
