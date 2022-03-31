import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  editItem=false;
  editHouse=false;
  newItem=false;
  newHouse=false;

  constructor() { }

  ngOnInit(): void {
  }

  onEditItem() {
    this.editItem = !this.editItem;
  }
  onEditHouse() {
    this.editHouse = !this.editHouse;
  }
  onNewItem() {
    this.newItem = !this.newItem;
  }
  onNewHouse() {
    this.newHouse = !this.newHouse;
  }

}
