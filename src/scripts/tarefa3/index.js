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

// console.log(findBooksByCategory(bookStoreBooks, 'Aventura'));

const findBookById = (bookList, bookId) => {
  return bookList.find((book) => {
    return book.id === bookId;
  });
};

// console.log(findBookById(bookStoreBooks, 10));

const sellBook = (bookList, bookId, userType = 0) => {
  const bookFound = bookList.find((book) => {
    return book.id === bookId;
  });

  if (!bookFound || bookFound.quantity === 0) {
    console.log('Livro indisponível para compra.');
    return;
  }

  bookFound.quantity = bookFound.quantity - 1;
  const discount = bookFound.price * userType;
  const bookPrice = (bookFound.price - discount).toFixed(2);

  console.log(bookPrice);
  return `Livro ${bookFound.title} vendido com sucesso por R$ ${bookPrice} (${discount}% de desconto).`;
};

// console.log(sellBook(bookStoreBooks, 1, userTypeDiscount.platinum));

const calculateAverageRating = (bookList, bookId) => {
  const bookFound = bookList.find((book) => {
    return book.id === bookId;
  });

  const { title, ratings } = bookFound;

  if (!bookFound) {
    console.log('Livro não encontrado.');
    return;
  } else if (ratings.length === 0) {
    console.log(`O Livro ${title} não possui nenhuma avaliação.`);
    return;
  }

  const total = ratings.reduce((acm, current) => {
    return acm + current;
  }, 0);

  const media = (total / ratings.length).toFixed(2);

  return `O livro ${title} possui uma média de avaliação igual a ${media}.`;
};

console.log(calculateAverageRating(bookStoreBooks, 17));
