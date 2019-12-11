import * as React from 'react';

import * as styles from './Content.scss';

import List from '../List';

import Book from '../../models/Book';
import Reader from '../../models/Reader';

import books from '../../MockData/books';
import readers from '../../MockData/readers';

import ReaderListItem from '../List/ListItem/ReaderListItem';
import BookItemReader from '../List/ListItem/BookListItem';

import img from '../../assets/images/avatar.png';

const Content: React.FC = () => (
  <>
    <main className={styles.main}>
      <div className={styles.content}></div>
    </main>
    <aside className={styles.aside}>
      <List<Reader>
        title="Top czytelnicy"
        items={readers}
        render={(reader: Reader): JSX.Element => (
          <ReaderListItem
            key={reader.id}
            id={reader.id}
            firstname={reader.name}
            lastname={reader.lastname}
          />
        )}
      />
      <List<Book>
        title="Najnowsze książki"
        items={books}
        render={(book: Book): JSX.Element => (
          <BookItemReader
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            imgpath={img}
          />
        )}
      />
    </aside>
  </>
);

export default Content;
