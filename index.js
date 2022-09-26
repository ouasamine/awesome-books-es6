/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */

import { spaFunction } from './modules/spa.js';
import { BookList } from './modules/bookslist.js';
import { Book } from './modules/book.js';
import { printBookList } from './modules/booksdisplay.js';
import { DateTime } from './modules/luxon.js';

const bookListObj = new BookList();
const htmlContainer = document.querySelector('#book-list ul');
const addBookBtn = document.forms.book['btn-add'];

addBookBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const bookAuthor = document.forms.book.author.value;
  const bookTitle = document.forms.book.title.value;
  const newb = new Book();
  newb.title = bookTitle;
  newb.author = bookAuthor;
  bookListObj.addBook(newb);
  printBookList(bookListObj, htmlContainer);
});

if (bookListObj.getBooks()) {
  printBookList(bookListObj, htmlContainer);
}

spaFunction();

const datetime = document.querySelector('#datetime');

setInterval(() => {
  const date = DateTime.now();
  datetime.innerHTML = date.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}, 1000);