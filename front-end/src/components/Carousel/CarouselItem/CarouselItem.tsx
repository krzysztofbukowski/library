import * as React from 'react';

import styles from './CarouselItem.scss';

import Book from '../../../models/Book';

const CarouselItem = (props): JSX.Element => {
  return (
    <div data-testid="CarouselItem" className={styles.carouselItem}>
      <div className={styles.content}>
        <img
          className={styles.contentImg}
          src="https://www.swiatksiazki.pl/media/catalog/product/cache/a946e6dbdb55333e1c3d566a3e38b923/7/2/7299906600872.jpg"></img>
        <div className={styles.contentText}>
          <h4 className={styles.contentTitle}>{props.title} </h4>
          <p className={styles.contentAuthor}>{props.author}</p>
          <p className={styles.contentDescryption}>{props.descryption}</p>
          <button className={styles.contentButton}>BUTTON</button>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
