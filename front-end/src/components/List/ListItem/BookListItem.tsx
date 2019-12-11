import * as React from 'react';

import styles from './BookListItem.scss';

interface OwnProps {
  id: string;
  title: string;
  author: string;
  imgpath?: string;
}

function BookItemReader(props: OwnProps): JSX.Element {
  return (
    <li>
      <div className={styles.bookListItem}>
        <img className={styles.cover} src={props.imgpath} alt="" />
        <div className={styles.text}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.author}>{props.author}</div>
        </div>
      </div>
    </li>
  );
}

export default BookItemReader;
