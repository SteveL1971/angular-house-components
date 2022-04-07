import { BasketRow } from "./basket-row";

export class House {
    constructor(public id: string,
                public name: string,
                public amount: number,
                public imageUrl: string,
                public description: string,
                public basketRows: BasketRow[]) {} 
}