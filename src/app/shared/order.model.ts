import { BasketRow } from "./basket-row";
import { House } from "./house.model";

export class Order {
    constructor(public id: number,
                public amount: number,
                public houses: House[],
                public basketRows: BasketRow[]
                ) {} 
}