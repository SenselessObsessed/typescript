import Buyable from "./Buyable";

export default class Phone implements Buyable {
    count: number
    price: number
    constructor (
        readonly id: number,
        readonly name: string,
        price: number,
        count: number
    ) { 
        this.price = price;
        this.count = count;
    }

    addCount(): void {
        this.count += 1
        this.price *= 2
    }

    removeCount(): void {
        this.count -= 1
        this.price /= 2
    }
}