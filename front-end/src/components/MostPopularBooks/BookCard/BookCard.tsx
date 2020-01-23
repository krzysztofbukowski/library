import * as React from 'react';

import * as styles from './BookCard.scss';
import Book from '../../../models/Book';

import cover from '../../../assets/images/virion.jpg';

const BookCard = (props: Book): JSX.Element => (
  <div className={styles.BookCard}>
    <div className={styles.content}>
      <img className={styles.img} src={cover} alt="" />
      <div className={styles.text}>
        <h4 className={styles.textHeader}>{props.title}</h4>
        <p className={styles.textParagraph}>{props.author}</p>
        <button className={styles.BookCardButton}>BUTTON</button>
      </div>
    </div>
  </div>
);

export default BookCard;
