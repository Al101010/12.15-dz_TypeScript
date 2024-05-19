import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    cartPrice(): number {
        return this._items.reduce((accumulator, object) => {return accumulator + object.price}, 0);
    }

    cartPricePlusDiscount(discount: number): number {
        const theTotalCostCart = this._items.reduce((accumulator, object) => {return accumulator + object.price}, 0);
        let result = theTotalCostCart - (theTotalCostCart * discount / 100)
        return result;
    }

    deleteById(_id: number): void {
        let cart = this._items;
    
        for (let i = 0; cart.length > i; i++) {
            if(cart[i].id === _id) {
                cart.splice(i, 1);
            }
        }
    }
}