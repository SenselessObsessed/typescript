import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Phone from './domain/Phone';

const cart = new Cart();
console.log(cart.items);

const phone = new Phone(9, 'IPhone 15', 100000, 1)
phone.addCount()
phone.addCount()
phone.removeCount()

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie('The Avengers', 3, 300, 2012, 'USA', 137, ['fantastic', 'action', 'adventures']));
cart.add(phone);

console.log(cart.items);
console.log(cart.getAllCost());
console.log(cart.getCostWithDiscount(10))
console.log(cart.remove(1001))
console.log(cart.items[0].price)