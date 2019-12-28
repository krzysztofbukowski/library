import * as React from 'react';

import * as styles from './Content.scss';

import List from '../List';

import Book from '../../models/Book';
import Reader from '../../models/Reader';

import books from '../../__mocks__/Books';
import readers from '../../__mocks__/Readers';

import ReaderListItem from '../List/ListItem/ReaderListItem';
import BookListItem from '../List/ListItem/BookListItem';

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
            avatarimg={img}
          />
        )}
      />
      <List<Book>
        title="Najnowsze książki"
        items={books}
        render={(book: Book): JSX.Element => (
          <BookListItem
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            coverimg="https://www.swiatksiazki.pl/media/catalog/product/cache/a946e6dbdb55333e1c3d566a3e38b923/7/2/7299906600872.jpg"
          />
        )}
      />
    </aside>
  </>
);

export default Content;
