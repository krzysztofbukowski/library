import * as React from 'react';

import * as styles from './Content.scss';

import List from '../List';

import books from '../../MockData/books';
import readers from '../../MockData/readers';

import Book from '../../models/Book';
import Reader from '../../models/Reader';

const Content: React.FC = () => (
  <>
    <main className={styles.main}>
      <div className={styles.content}></div>
    </main>
    <aside className={styles.aside}>
      <List<Book>
        items={books}
        render={(book: Book): JSX.Element => (
          <li>
            {book.title}
            {book.author}
          </li>
        )}
      />
      <List<Reader>
        items={readers}
        render={(reader: Reader): JSX.Element => (
          <li>
            {reader.name}
            {reader.lastname}
          </li>
        )}
      />
    </aside>
  </>
);

export default Content;
