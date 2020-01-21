import * as React from 'react';

import * as styles from './Thumbnail.scss';
import Book from '../../../models/Book';

const Thumb = (props: Book): JSX.Element => (
  <div className={styles.thumb}>
    <div className={styles.content}>
      <img
        className={styles.img}
        src="https://www.swiatksiazki.pl/media/catalog/product/cache/a946e6dbdb55333e1c3d566a3e38b923/7/2/7299906600872.jpg"
        alt=""
      />
      <div className={styles.text}>
        <h4 className={styles.textHeader}>{props.title}</h4>
        <p className={styles.textParagraph}>{props.author}</p>
        <button className={styles.thumbButton}>BUTTON</button>
      </div>
    </div>
  </div>
);

export default Thumb;