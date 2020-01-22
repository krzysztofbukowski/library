import * as React from 'react';

import * as styles from './MostPopularBooks.scss';

import BookCard from './BookCard';

import Book from '../../models/Book';

const MostPopularBooks: React.FC = ({ slicedBooks }) => (
  <div className={styles.MostPopularBooks}>
    {slicedBooks.map((book: Book) => (
      <BookCard
        id={book.id}
        key={book.id}
        title={book.title}
        author={book.author}
        cover={book.cover}
      />
    ))}
  </div>
);

export default MostPopularBooks;
