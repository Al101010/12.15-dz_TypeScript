import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

console.log('Добавим в корзину');
cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1009, 'Мстители', 2012, 'США', 'Avengers Assemble', 'Фантастика, боевик, фентези, приключения', 137, 2100));

console.log(cart.items);
console.log('Посчитаем суммарную стоимость (без учёта скидки)');
console.log(cart.cartPrice());
console.log('Посчитаем суммарную стоимость + скидка 10%');
console.log(cart.cartPricePlusDiscount(10));
console.log('Удалим из корзины фильм Мстители и снова подсчитаем суммарную стоимость (без учёта скидки)');
cart.deleteById(1009);
console.log(cart.cartPrice());
console.log('с учетом скидки 10%: ' + cart.cartPricePlusDiscount(10));