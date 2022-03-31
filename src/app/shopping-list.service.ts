import { BasketRow } from "./shared/basket-row";
import { Item } from "./shared/item.model";
import { Subject } from "rxjs";
import { House } from "./shared/house.model";
import { Order } from "./shared/order.model";

export class ShoppingListService {
shoppingBasket: BasketRow[] = [];
shoppingBasketHouses: House[] = [];
orders: Order[] = [];
// looseItems: House = new House(0,"Separate Items", 0, "" , "", [new BasketRow(new Item(0,"","","","",0),0)])
// newHouse: House = new House(0,"Separate Items", 0, "" , "", [new BasketRow(new Item(0,"","","","",0),0)])
// newHouse: House = new House(0,"", 0, "" , "", [])
newHouseBasketRows: BasketRow[] = [];
shoppingBasketChanged = new Subject<BasketRow[]>();
shoppingBasketHousesChanged = new Subject<House[]>();
itemsInCart = new Subject<number>();
housesInCart = new Subject<number>();

items : Item[] = [
    new Item(1, 'Wall', 'brick', 'high quality bricks', '../assets/wall1.jpg', 1999),
    new Item(2, 'Wall', 'panel', 'pine wood paneling', '../assets/wall2.jpg', 3399),
    new Item(3, 'Wall', 'panel', 'pine wood paneling', '../assets/wall3.jpg', 2299),
    new Item(4, 'Wall', 'panel', 'pine wood paneling', '../assets/wall4.jpg', 2599),
    new Item(5, 'Floor', 'laminate', 'expensive laminate', '../assets/floor1.jpg', 799),
    new Item(6, 'Floor', 'plank', 'lavish oak plank', '../assets/floor2.jpg', 699),
    new Item(7, 'Floor', 'plank', 'cheap laminate', '../assets/floor3.jpg', 399),
    new Item(8, 'Floor', 'plank', 'teak plank', '../assets/floor4.jpg', 1699),
    new Item(9, 'Window', '1-glass', 'Cheap windows','../assets/window1.jpg',3999),
    new Item(10, 'Window', '2-glass', 'Energy saving windows','../assets/window2.jpg',3499),
    new Item(11, 'Window', '3-glass', 'Effiecient windows','../assets/window3.jpg',5499),
    new Item(12, 'Window', '4-glass', 'Best possible windows','../assets/window4.jpg',2999),
    new Item(13, 'Ceiling', 'Ceiling 1', 'Basic ceiling','../assets/ceiling1.jpg',2799),
    new Item(14, 'Ceiling', 'Ceiling 2', 'Ornate ceiling','../assets/ceiling2.jpg',3799),
    new Item(15, 'Ceiling', 'Ceiling 3', 'Tiled ceiling','../assets/ceiling3.jpg',4999),
    new Item(16, 'Ceiling', 'Ceiling 4', 'White ceiling','../assets/ceiling4.jpg',5899),
    new Item(17, 'Door', 'door 1', 'Really nice door','../assets/door1.jpg',1199),
    new Item(18, 'Door', 'door 2', 'Bathroom door','../assets/door2.jpg',899),
    new Item(19, 'Door', 'door 3', 'Sturdy front door','../assets/door3.jpg',1499),
    new Item(20, 'Door', 'door 4', 'Oak door','../assets/door4.jpg',2299),
  ];

houses: House[] = [ 
    new House(1,'Luxury beach', 1, '../assets/house1.jpg' , "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, odit, necessitatibus provident veritatis, dicta magnam aut tempore commodi quidem sapiente atque nihil culpa deleniti repudiandae. Ipsa sunt quisquam velit expedita!", [
      new BasketRow( new Item(1, 'Wall', 'brick', 'high quality bricks', '../assets/wall1.jpg', 1999), 1),
      new BasketRow( new Item(5, 'Floor', 'laminate', 'expensive laminate', '../assets/floor1.jpg', 299), 3),
      new BasketRow( new Item(9, 'Window', '1-glass', 'Cheap windows','../assets/window1.jpg',3999), 2),
      new BasketRow( new Item(13, 'Ceiling', 'Ceiling 1', 'Basic ceiling','../assets/ceiling1.jpg',2999), 2),
      new BasketRow( new Item(17, 'Door', 'door 1', 'Really nice door','../assets/door1.jpg',1099), 5)
    ]),
    new House(2,'Economy shack', 1, '../assets/house2.jpg' , "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, odit, necessitatibus provident veritatis, dicta magnam aut tempore commodi quidem sapiente atque nihil culpa deleniti repudiandae. Ipsa sunt quisquam velit expedita!", [
      new BasketRow( new Item(2, 'Wall', 'panel', 'pine wood paneling', '../assets/wall2.jpg', 2999), 1),
      new BasketRow( new Item(6, 'Floor', 'plank', 'lavish oak plank', '../assets/floor2.jpg', 699), 2),
      new BasketRow( new Item(10, 'Window', '2-glass', 'Energy saving windows','../assets/window2.jpg',3999), 1),
      new BasketRow( new Item(14, 'Ceiling', 'Ceiling 2', 'Ornate ceiling','../assets/ceiling2.jpg',3999), 15),
      new BasketRow(new Item(18, 'Door', 'door 2', 'Bathroom door','../assets/door2.jpg',899), 15)
    ]),
    new House(3,'Robust shed', 1, '../assets/house3.jpg' , "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, odit, necessitatibus provident veritatis, dicta magnam aut tempore commodi quidem sapiente atque nihil culpa deleniti repudiandae. Ipsa sunt quisquam velit expedita!", [
        new BasketRow( new Item(3, 'Wall', 'panel', 'pine wood paneling', '../assets/wall3.jpg', 2999), 2),
        new BasketRow( new Item(7, 'Floor', 'plank', 'cheap laminate', '../assets/floor3.jpg', 399), 1),
        new BasketRow( new Item(11, 'Window', '3-glass', 'Effiecient windows','../assets/window3.jpg',3999), 15),
        new BasketRow(new Item(15, 'Ceiling', 'Ceiling 3', 'Tiled ceiling','../assets/ceiling3.jpg',4999),6),
        new BasketRow(new Item(19, 'Door', 'door 3', 'Sturdy front door','../assets/door3.jpg',1499),12)
    ]),
    new House(4,'Garden shed', 1, '../assets/house4.jpg' , "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, odit, necessitatibus provident veritatis, dicta magnam aut tempore commodi quidem sapiente atque nihil culpa deleniti repudiandae. Ipsa sunt quisquam velit expedita!", [
        new BasketRow( new Item(4, 'Wall', 'panel', 'pine wood paneling', '../assets/wall4.jpg', 2999), 2),
        new BasketRow( new Item(8, 'Floor', 'plank', 'teak plank', '../assets/floor4.jpg', 1699), 1),
        new BasketRow( new Item(12, 'Window', '4-glass', 'Best possible windows','../assets/window4.jpg',3999), 10),
        new BasketRow( new Item(10, 'Window', '2-glass', 'Energy saving windows','../assets/window2.jpg',3999), 20),
        new BasketRow( new Item(16, 'Ceiling', 'Ceiling 4', 'White ceiling','../assets/ceiling4.jpg',5999),6),
        new BasketRow( new Item(20, 'Door', 'door 4', 'Oak door','../assets/door4.jpg',2299),4)
    ]),
    new House(5,'Old hut', 1, '../assets/house5.jpg' , "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, odit, necessitatibus provident veritatis, dicta magnam aut tempore commodi quidem sapiente atque nihil culpa deleniti repudiandae. Ipsa sunt quisquam velit expedita!", [
        new BasketRow( new Item(1, 'Wall', 'brick', 'high quality bricks', '../assets/wall1.jpg', 1999), 14),
        new BasketRow( new Item(6, 'Floor', 'plank', 'lavish oak plank', '../assets/floor2.jpg', 699), 10),
        new BasketRow( new Item(8, 'Floor', 'plank', 'teak plank', '../assets/floor4.jpg', 1699), 12),
        new BasketRow( new Item(12, 'Window', '4-glass', 'Best possible windows','../assets/window4.jpg',3999), 20),
        new BasketRow( new Item(14, 'Ceiling', 'Ceiling 2', 'Ornate ceiling','../assets/ceiling2.jpg',3999), 16),
        new BasketRow( new Item(17, 'Door', 'door 1', 'Really nice door','../assets/door1.jpg',1099), 22)
    ]),
    new House(6,'Lighthouse', 1, '../assets/house6.jpg' , "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, odit, necessitatibus provident veritatis, dicta magnam aut tempore commodi quidem sapiente atque nihil culpa deleniti repudiandae. Ipsa sunt quisquam velit expedita!", [
        new BasketRow( new Item(4, 'Wall', 'panel', 'pine wood paneling', '../assets/wall4.jpg', 2999), 4),
        new BasketRow( new Item(5, 'Floor', 'laminate', 'expensive laminate', '../assets/floor1.jpg', 299), 9),
        new BasketRow( new Item(11, 'Window', '3-glass', 'Effiecient windows','../assets/window3.jpg',3999), 10),
        new BasketRow( new Item(12, 'Window', '4-glass', 'Best possible windows','../assets/window4.jpg',3999), 10),
        new BasketRow( new Item(13, 'Ceiling', 'Ceiling 1', 'Basic ceiling','../assets/ceiling1.jpg',2999), 6),
        new BasketRow( new Item(20, 'Door', 'door 4', 'Oak door','../assets/door4.jpg',2299), 12)
    ]),
    new House(7,'Rustic house', 1, '../assets/house7.jpg' , "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, odit, necessitatibus provident veritatis, dicta magnam aut tempore commodi quidem sapiente atque nihil culpa deleniti repudiandae. Ipsa sunt quisquam velit expedita!", [
        new BasketRow( new Item(3, 'Wall', 'panel', 'pine wood paneling', '../assets/wall3.jpg', 2999), 7),
        new BasketRow( new Item(8, 'Floor', 'plank', 'teak plank', '../assets/floor4.jpg', 1699), 12),
        new BasketRow( new Item(10, 'Window', '2-glass', 'Energy saving windows','../assets/window2.jpg',3999), 23),
        new BasketRow( new Item(16, 'Ceiling', 'Ceiling 4', 'White ceiling','../assets/ceiling4.jpg',5999), 9),
        new BasketRow( new Item(19, 'Door', 'door 3', 'Sturdy front door','../assets/door3.jpg',1499), 15)
    ]),
    new House(8,'Modern shed', 1, '../assets/house8.jpg' , "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, odit, necessitatibus provident veritatis, dicta magnam aut tempore commodi quidem sapiente atque nihil culpa deleniti repudiandae. Ipsa sunt quisquam velit expedita!", [
        new BasketRow( new Item(2, 'Wall', 'panel', 'pine wood paneling', '../assets/wall2.jpg', 2999), 6),
        new BasketRow( new Item(4, 'Wall', 'panel', 'pine wood paneling', '../assets/wall4.jpg', 2999), 2),
        new BasketRow( new Item(7, 'Floor', 'plank', 'cheap laminate', '../assets/floor3.jpg', 399), 11),
        new BasketRow( new Item(9, 'Window', '1-glass', 'Cheap windows','../assets/window1.jpg',3999), 22),
        new BasketRow( new Item(15, 'Ceiling', 'Ceiling 3', 'Tiled ceiling','../assets/ceiling3.jpg',4999),8),
        new BasketRow( new Item(18, 'Door', 'door 2', 'Bathroom door','../assets/door2.jpg',899),14)
    ])
];


    addItem(item: Item, amount: number) {
        const found = this.shoppingBasket.findIndex(element => element.item.id === item.id);
        if(found > -1){
            this.shoppingBasket[found].amount += amount;
        } else {
            this.shoppingBasket.push(new BasketRow(item, amount));
        }
        this.shoppingBasketChanged.next(this.shoppingBasket.slice())
        this.countCartItems()
      }

    addSingleHouse(house: House){
        const found = this.shoppingBasketHouses.findIndex(element => element.id === house.id);
        if(found > -1){
            this.shoppingBasketHouses[found].amount ++
        } else {
            this.shoppingBasketHouses.push(new House(house.id,house.name,house.amount,house.imageUrl,house.description,house.basketRows));
        }
        this.shoppingBasketHousesChanged.next(this.shoppingBasketHouses.slice());
        this.countCartHouses();
      }

    removeSingleHouse(index: number){
        this.shoppingBasketHouses[index].amount--;
        if(this.shoppingBasketHouses[index].amount===0){
            this.shoppingBasketHouses.splice(index,1);
        } 
        this.shoppingBasketHousesChanged.next(this.shoppingBasketHouses.slice());
        this.countCartHouses();
      }

      removeHouseRow(index: number) {
        this.shoppingBasketHouses.splice(index,1);
        this.shoppingBasketHousesChanged.next(this.shoppingBasketHouses.slice());
        this.countCartHouses();
    }

    removeSingleItem(index: number) {
        this.shoppingBasket[index].amount--;
        if(this.shoppingBasket[index].amount===0){
            this.shoppingBasket.splice(index,1);
        } 
        this.shoppingBasketChanged.next(this.shoppingBasket.slice());
        this.countCartItems();
    }

    removeRow(index: number) {
        this.shoppingBasket.splice(index,1);
        this.shoppingBasketChanged.next(this.shoppingBasket.slice());
        this.countCartItems();
    }

    addSingleItem(index: number) {
        this.shoppingBasket[index].amount++;
        this.shoppingBasketChanged.next(this.shoppingBasket.slice());
        this.countCartItems();
    }

    countCartItems() {
        let count: number = 0;
        for (let i = 0; i < this.shoppingBasket.length; i++) {
          count += this.shoppingBasket[i].amount;
        }
        this.itemsInCart.next(count)
    }

    countCartHouses() {
        let count: number = 0;
        for (let i = 0; i < this.shoppingBasketHouses.length; i++) {
          count += this.shoppingBasketHouses[i].amount;
        }
        this.housesInCart.next(count)
    }

    countSingleHousePrice(index: number) {
        let count: number = 0;
        for (let i = 0; i < this.shoppingBasketHouses[index].basketRows.length; i++) {
          count += this.shoppingBasketHouses[index].basketRows[i].item.price * this.shoppingBasketHouses[index].basketRows[i].amount;
        }
        return count;
    }

    getShoppingBasket() {
        return this.shoppingBasket.slice();
    }

    getHouses() {
        return this.houses.slice();
    }

    getItems() {
        return this.items.slice();
    }

    getShoppingBasketHouses() {
        return this.shoppingBasketHouses.slice();
    }

    addOrder(order: Order) {
        this.orders.push(Object.assign({}, order));
    }

    createItem(item: Item) {
        // this.items.push(Object.assign({}, item));
        this.items.push(item);
    }

    createHouse(house: House) {
        this.houses.push(house);
    }

    getOrders() {
        return this.orders.slice();
    }

    emptyCart() {
        this.shoppingBasket = [];
        this.shoppingBasketHouses = [];
        this.shoppingBasketChanged.next(this.shoppingBasket.slice());
        this.shoppingBasketHousesChanged.next(this.shoppingBasketHouses.slice());
        this.countCartItems();
        this.countCartHouses();
    }

    addBasketRowsToNewHouse(item: Item) {
        const found = this.newHouseBasketRows.findIndex(element => element.item.id === item.id);
        if(found > -1){
            this.newHouseBasketRows[found].amount ++;
        } else {
            this.newHouseBasketRows.push(new BasketRow(item, 1));
        }

    }
    removeBasketRowsFromNewHouse(item: Item) {
        const found = this.newHouseBasketRows.findIndex(element => element.item.id === item.id);
        if(found > -1){
            this.newHouseBasketRows[found].amount--;
            if(this.newHouseBasketRows[found].amount===0){
                this.newHouseBasketRows.splice(found,1)
            }
        }
    }

    getNewHouseBasketRows() {
        return this.newHouseBasketRows.slice();
    }
    resetNewHouseBasketRows() {
        this.newHouseBasketRows.length=0;
    }

    addHouse(house: House) {
        this.houses.push(house)
    }

}