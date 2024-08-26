import Buyable from "./Buyable";

export default class Movie implements Buyable {
    constructor(
        readonly name: string,
        readonly id: number,
        readonly price: number,
        readonly year: number,
        readonly country: string,
        readonly time: number,
        readonly genre: string[]
    ) { }
}