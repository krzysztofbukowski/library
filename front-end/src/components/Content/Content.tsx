import * as React from 'react';

import * as styles from './Content.scss';

import List from '../List';

import Book from '../../models/Book';
import Reader from '../../models/Reader';

import books from '../../MockData/books';
import readers from '../../MockData/readers';

import ListItemBook from '../List/ListItem/ListItemBook';
import ListItemReader from '../List/ListItem/ListItemReader';

const Content: React.FC = () => (
  <>
    <main className={styles.main}>
      <div className={styles.content}></div>
    </main>
    <aside className={styles.aside}>
      <List<Book>
        items={books}
        render={(book: Book): JSX.Element => (
          <ListItemBook
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
          />
        )}
      />
      <List<Reader>
        items={readers}
        render={(reader: Reader): JSX.Element => (
          <ListItemReader
            key={reader.id}
            id={reader.id}
            name={reader.name}
            lastname={reader.lastname}
          />
        )}
      />
    </aside>
  </>
);

export default Content;
