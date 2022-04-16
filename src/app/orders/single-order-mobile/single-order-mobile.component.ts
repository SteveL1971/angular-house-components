import { Component, Input } from '@angular/core';
import { Order } from 'src/app/shared/order.model';

@Component({
  selector: 'app-single-order-mobile',
  templateUrl: './single-order-mobile.component.html',
  styleUrls: ['./single-order-mobile.component.css']
})

export class SingleOrderMobileComponent {

  @Input() order: Order =  new Order('', 0,0,[], [] );
  @Input() chosenOrder: number = 0;

}
