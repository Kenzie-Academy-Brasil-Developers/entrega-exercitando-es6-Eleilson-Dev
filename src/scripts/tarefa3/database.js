export const userTypeDiscount = {
  normal: 0,
  bronze: 0.05,
  silver: 0.1,
  gold: 0.12,
  platinum: 0.15
};

export const bookStoreBooks = [
  {
    id: 1,
    title: 'Dom Quixote',
    author: 'Miguel de Cervantes',
    quantity: 5,
    price: 100,
    categories: ['Ficção Clássica', 'Aventura'],
    ratings: [],
    comments: ['Ótimo livro!', 'Recomendo a todos.', 'Um clássico imperdível.']
  },
  {
    id: 2,
    title: 'Harry Potter and the Sorcerers Stone',
    author: 'J.K. Rowling',
    quantity: 3,
    price: 39.99,
    categories: ['Fantasia', 'Aventura'],
    ratings: [4.8, 4.7, 5],
    comments: ['Maravilhoso!', 'Adorei a história.', 'Uma aventura fascinante.']
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    quantity: 0,
    price: 24.99,
    categories: ['Ficção Distópica', 'Política'],
    ratings: [3.2, 2.5, 3.0],
    comments: [
      'Interessante, mas um pouco denso.',
      'Reflexivo e assustador.',
      'Vale a pena ler.'
    ]
  },
  {
    id: 4,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    quantity: 4,
    price: 19.99,
    categories: ['Ficção Clássica', 'Romance'],
    ratings: [4.0, 4.2, 3.9],
    comments: [
      'Uma narrativa envolvente.',
      'Personagens bem desenvolvidos.',
      'Final surpreendente.'
    ]
  },
  {
    id: 5,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    quantity: 6,
    price: 27.5,
    categories: ['Ficção Clássica', 'Drama'],
    ratings: [4.7, 4.5, 4.9],
    comments: [
      'Leitura obrigatória!',
      'Tema atual e importante.',
      'Narrativa comovente.'
    ]
  },
  {
    id: 6,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    quantity: 8,
    price: 21.75,
    categories: ['Ficção Clássica', 'Romance'],
    ratings: [4.9, 5, 4.7],
    comments: [
      'Delicado e romântico.',
      'Diálogos inteligentes.',
      'Uma das melhores obras de Austen.'
    ]
  },
  {
    id: 7,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    quantity: 3,
    price: 18.5,
    categories: ['Ficção Contemporânea', 'Drama'],
    ratings: [3.8, 4.0, 3.5],
    comments: [
      'Impactante e controverso.',
      'Personagem complexo.',
      'Um clássico da literatura jovem.'
    ]
  },
  {
    id: 8,
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel Garcia Marquez',
    quantity: 7,
    price: 30.25,
    categories: ['Ficção Contemporânea', 'Realismo Mágico'],
    ratings: [4.6, 4.8, 4.9],
    comments: [
      'Obra-prima!',
      'Narrativa cativante.',
      'Maravilhoso realismo mágico.'
    ]
  },
  {
    id: 9,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    quantity: 4,
    price: 45.0,
    categories: ['Fantasia', 'Aventura'],
    ratings: [4.9, 5, 4.7],
    comments: [
      'Fantasia épica.',
      'Mundo ricamente construído.',
      'Inesquecível jornada.'
    ]
  },
  {
    id: 10,
    title: 'Brave New World',
    author: 'Aldous Huxley',
    quantity: 1,
    price: 26.0,
    categories: ['Ficção Distópica', 'Ficção Científica'],
    ratings: [3.5, 3.0, 3.8],
    comments: [
      'Fascinante e perturbador.',
      'Reflexão sobre a sociedade.',
      'Escrita visionária.'
    ]
  },
  {
    id: 11,
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    quantity: 9,
    price: 23.99,
    categories: ['Ficção Clássica', 'Romance'],
    ratings: [4.7, 4.5, 4.9],
    comments: [
      'Personagens complexos.',
      'Exploração da moralidade.',
      'Drama psicológico intenso.'
    ]
  },
  {
    id: 12,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    quantity: 5,
    price: 31.0,
    categories: ['Fantasia', 'Aventura'],
    ratings: [4.8, 5, 4.7],
    comments: [
      'Aventura cativante.',
      'História emocionante.',
      'Leitura para todas as idades.'
    ]
  },
  {
    id: 13,
    title: 'Jane Eyre',
    author: 'Charlotte Bronte',
    quantity: 3,
    price: 22.5,
    categories: ['Ficção Clássica', 'Romance'],
    ratings: [4.6, 4.8, 4.7],
    comments: [
      'Romance emocionante.',
      'Protagonista cativante.',
      'Um clássico do amor e autodescoberta.'
    ]
  },
  {
    id: 14,
    title: 'Wuthering Heights',
    author: 'Emily Bronte',
    quantity: 2,
    price: 19.75,
    categories: ['Ficção Clássica', 'Romance'],
    ratings: [4.3, 4.5, 4.0],
    comments: [
      'Emocionante e intenso.',
      'Ambiente sombrio e envolvente.',
      'Personagens inesquecíveis.'
    ]
  },
  {
    id: 15,
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    quantity: 6,
    price: 28.99,
    categories: ['Ficção Contemporânea', 'Mistério'],
    ratings: [4.0, 4.2, 3.9],
    comments: [
      'Mistério intrigante.',
      'Ação e história bem entrelaçados.',
      'Uma aventura empolgante.'
    ]
  },
  {
    id: 16,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    quantity: 7,
    price: 25.5,
    categories: ['Ficção Contemporânea', 'Esoterismo'],
    ratings: [3.9, 4.0, 3.5],
    comments: [
      'Filosófico e inspirador.',
      'Jornada de autodescoberta.',
      'Reflexões sobre destino e sonhos.'
    ]
  },
  {
    id: 17,
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    quantity: 4,
    price: 20.0,
    categories: ['Ficção Clássica', 'Romance'],
    ratings: [4.7, 4.5, 4.9],
    comments: [
      'Estilo de escrita marcante.',
      'Exploração da vaidade e beleza.',
      'Obra-prima de Wilde.'
    ]
  },
  {
    id: 18,
    title: 'Moby-Dick',
    author: 'Herman Melville',
    quantity: 3,
    price: 29.0,
    categories: ['Ficção Clássica', 'Aventura'],
    ratings: [4.6, 4.8, 4.7],
    comments: [
      'Aventura épica.',
      'Estudo sobre obsessão.',
      'Imersão na vida marítima.'
    ]
  },
  {
    id: 19,
    title: 'The Divine Comedy',
    author: 'Dante Alighieri',
    quantity: 5,
    price: 35.0,
    categories: ['Poesia Épica', 'Ficção Clássica'],
    ratings: [4.9, 5, 4.7],
    comments: [
      'Obra-prima da literatura.',
      'Viagem pelas profundezas do inferno.',
      'Grande relevância histórica.'
    ]
  }
];
