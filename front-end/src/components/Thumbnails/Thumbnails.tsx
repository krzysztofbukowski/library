import * as React from 'react';

import * as styles from './Thumbnails.scss';

import Thumbnail from './Thumbnail';

import books from '../../__mocks__/Books.js';

import Book from '../../models/Book';

const slicedBooks = books.slice(books.length - 8, books.length);

const Thumbs: React.FC = () => (
  <div className={styles.thumbs}>
    <div className={styles.thumbsTitle}>
      <h3 className={styles.thumbsTitleText}>Najpopularniejsze ksiazki</h3>
    </div>
    {slicedBooks.map((book: Book) => (
      <Thumbnail
        id={book.id}
        key={book.id}
        title={book.title}
        author={book.author}
        cover={book.cover}
      />
    ))}
  </div>
);

export default Thumbs;
