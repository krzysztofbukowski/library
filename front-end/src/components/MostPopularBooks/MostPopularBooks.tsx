import * as React from 'react';

import * as styles from './MostPopularBooks.scss';

import BookCard from './BookCard';

import Book from '../../models/Book';

interface OwnProps {
  books: Book[];
}

const MostPopularBooks: React.FC<OwnProps> = ({ books }) => (
  <div className={styles.MostPopularBooks}>
    {books.map((book: Book) => (
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
