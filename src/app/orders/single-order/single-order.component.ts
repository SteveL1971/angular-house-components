import { Component, Input } from '@angular/core';
import { Order } from 'src/app/shared/order.model';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.css']
})
export class SingleOrderComponent {

  @Input() order: Order =  new Order('', 0,0,[], [] );
  @Input() chosenOrder: number = 0;

}
