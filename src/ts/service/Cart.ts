import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    remove(id: number): void {
        this._items.splice(this._items.findIndex(item => item.id), 1)
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    getAllCost(): number {
        return this._items.reduce((acc, curr) => acc + curr.price, 0)
    }

    getCostWithDiscount(discount: number): number {
        const allCost: number = this.getAllCost();
        const discounPersent: number = this.getAllCost() / 100 * discount;
        return allCost - discounPersent;
    }
}