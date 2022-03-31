import { Item } from "./item.model";

export class BasketRow {
    constructor(public item: Item, 
                public amount: number) {} 
}