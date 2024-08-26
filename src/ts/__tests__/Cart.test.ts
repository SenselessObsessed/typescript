import Cart from "../service/Cart";
import Phone from "../domain/Phone";
import Movie from "../domain/Movie";
import MusicAlbum from "../domain/MusicAlbum";
import Book from "../domain/Book";

test('should be add and remove to cart', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie('The Avengers', 3, 300, 2012, 'USA', 137, ['fantastic', 'action', 'adventures']));
    cart.add(new Phone(9, 'IPhone 15', 100000, 1))

    expect(cart.items.length).not.toBe(0)

    cart.remove(3)

    expect(cart.items.length).toBe(3)
});

test('should be return cost and cost with discount', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie('The Avengers', 3, 300, 2012, 'USA', 137, ['fantastic', 'action', 'adventures']));
    cart.add(new Phone(9, 'IPhone 15', 100000, 1));

    expect(cart.getAllCost()).toBe(103200)
    expect(cart.getCostWithDiscount(50)).toBe(51600)
});

test('should be a normal counter of phone', () => {
    const cart = new Cart();
    const phone = new Phone(9, 'IPhone 15', 100000, 1);
    cart.add(phone)
    phone.addCount()

    expect(cart.items[0].price).toBe(200000)

    phone.removeCount()

    expect(cart.items[0].price).toBe(100000)
});