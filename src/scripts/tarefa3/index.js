import { bookStoreBooks, userTypeDiscount } from './database.js';
// normal: 0%
// bronze: 5%
// silver: 10%
// gold: 12%
// platinum: 15%

const findBooksByCategory = (bookList, category) => {
  return bookList.filter((book) => {
    return book.categories.some((bookCategory) => {
      return bookCategory === category;
    });
  });
};

console.log(findBooksByCategory(bookStoreBooks, 'Aventura'));
