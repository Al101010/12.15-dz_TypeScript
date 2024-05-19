import Cart from '../service/Cart';

import Book from '../domain/Book';
import MusicAlbum from "../domain/MusicAlbum";
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('добавляем Музыкальный альбом', () => {
  const cart = new Cart();
  const musicAlbum: MusicAlbum = {
    id: 1008,
    name: 'Meteora',
    author: 'Linkin Park',
    price: 900
  };
  cart.add(musicAlbum);
  const result: MusicAlbum[] = [
    {
      id: 1008,
      name: 'Meteora',
      author: 'Linkin Park',
      price: 900
    },
  ];
  expect(cart.items).toEqual(result);
});

test('суммарная стоимость', () => {
  const cart = new Cart();
  
  const book: Book = {id: 1001, name: 'War and Piece', author: 'Leo Tolstoy', price: 2000, pages: 1225};
  cart.add(book);
  const musicAlbum: MusicAlbum = {id: 1008, name: 'Meteora', author: 'Linkin Park', price: 900};
  cart.add(musicAlbum);
  const movie: Movie = {id: 1009, name: 'Мстители', year: 2012, country: 'США', slogan: 'Avengers Assemble', genre: 'Фантастика, боевик, фентези, приключения', time: 137, price: 2100};
  cart.add(movie);

  expect(cart.cartPrice()).toBe(5000);
});

test('суммарная стоимость + скидка', () => {
  const cart = new Cart();
  
  const book: Book = {id: 1001, name: 'War and Piece', author: 'Leo Tolstoy', price: 2000, pages: 1225};
  cart.add(book);
  const musicAlbum: MusicAlbum = {id: 1008, name: 'Meteora', author: 'Linkin Park', price: 900};
  cart.add(musicAlbum);
  const movie: Movie = {id: 1009, name: 'Мстители', year: 2012, country: 'США', slogan: 'Avengers Assemble', genre: 'Фантастика, боевик, фентези, приключения', time: 137, price: 2100};
  cart.add(movie);

  expect(cart.cartPricePlusDiscount(10)).toBe(4500);
});

test('удаляем из корзины по id', () => {
  const cart = new Cart();
  
  const book: Book = {id: 1001, name: 'War and Piece', author: 'Leo Tolstoy', price: 2000, pages: 1225};
  cart.add(book);
  const musicAlbum: MusicAlbum = {id: 1008, name: 'Meteora', author: 'Linkin Park', price: 900};
  cart.add(musicAlbum);
  const movie: Movie = {id: 1009, name: 'Мстители', year: 2012, country: 'США', slogan: 'Avengers Assemble', genre: 'Фантастика, боевик, фентези, приключения', time: 137, price: 2100};
  cart.add(movie);

  const result = [book, musicAlbum];
  cart.deleteById(1009);

  expect(cart.items).toEqual(result);
});