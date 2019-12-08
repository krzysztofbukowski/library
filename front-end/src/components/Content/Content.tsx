import * as React from 'react';

import * as styles from './Content.scss';

import List from '../List';

import books from '../../MockData/Books';
import readers from '../../MockData/Readers';

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
        render={(element: Book): JSX.Element => (
          <li>
            {element.title}
            {element.author}
          </li>
        )}
      />
      <List<Reader>
        items={readers}
        render={(element: Reader): JSX.Element => (
          <li>
            {element.name}
            {element.lastname}
          </li>
        )}
      />
    </aside>
  </>
);

export default Content;
