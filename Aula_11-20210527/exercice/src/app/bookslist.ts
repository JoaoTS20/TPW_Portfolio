import {Book} from "./book";
import {PUBLISHERS} from "./publisherslist";
import {AUTHORS} from "./authorslist";

export const BOOKS: Book[] = [
  {num: 1, title: 'Livro Exemplo1', date: new Date(2021,1,13), authors: [AUTHORS[0],AUTHORS[1]], publisher: PUBLISHERS[0]},
  {num: 2, title: 'Livro Exemplo2', date: new Date(2000,12,22), authors: [AUTHORS[1]], publisher: PUBLISHERS[1]},

];
