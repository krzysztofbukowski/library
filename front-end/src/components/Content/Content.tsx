import * as React from 'react';

import * as styles from './Content.scss';

import List from '../List';

import Book from '../../models/Book';
import Reader from '../../models/Reader';

import books from '../../MockData/books';
import readers from '../../MockData/readers';

import BookListItem from '../List/ListItem/BookListItem';
import ReaderListItem from '../List/ListItem/ReaderListItem';
import BookItemReader from '../List/ListItem/BookListItem';

const Content: React.FC = () => (
  <>
    <main className={styles.main}>
      <div className={styles.content}></div>
    </main>
    <aside className={styles.aside}>
      <List<Reader>
        listName="Top czytelnicy"
        items={readers}
        render={(reader: Reader): JSX.Element => (
          <ReaderListItem
            key={reader.id}
            id={reader.id}
            name={reader.name}
            lastname={reader.lastname}
          />
        )}
      />
      <List<Book>
        listName="Najnowsze książki"
        items={books}
        render={(book: Book): JSX.Element => (
          <BookItemReader
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
          />
        )}
      />
    </aside>
  </>
);

export default Content;
