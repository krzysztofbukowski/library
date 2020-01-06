import * as React from 'react';

import styles from './BookListItem.scss';

interface OwnProps {
  id: string;
  title: string;
  author: string;
  coverimg?: string;
}

function BookListItem(props: OwnProps): JSX.Element {
  return (
    <li data-testid="BookListItem">
      <div className={styles.bookListItem}>
        <img className={styles.cover} src={props.coverimg} alt="" />
        <div className={styles.text}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.author}>{props.author}</div>
        </div>
      </div>
    </li>
  );
}

export default BookListItem;
