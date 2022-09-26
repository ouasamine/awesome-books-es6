/* eslint-disable import/prefer-default-export */export class BookList {
  constructor() {
    this.list = [];
  }

  getBooks = () => {
    this.list = JSON.parse(localStorage.getItem('booklist'));
    return this.list;
  }

  updateStoredBooks = () => {
    const newList = JSON.stringify(this.list);
    localStorage.setItem('booklist', newList);
  }

  addBook = (book) => {
    if (!this.list || !this.list.length) {
      this.list = [];
      book.index = 0;
    } else {
      const lastElemIndex = this.list.slice(-1).pop().index;
      book.index = lastElemIndex + 1;
    }
    this.list.push(book);
    this.updateStoredBooks();
  }

  removeBook = (elemIndex) => {
    this.list = this.list.filter((book) => parseInt(book.index, 10) !== parseInt(elemIndex, 10));
    this.updateStoredBooks();
  }
}