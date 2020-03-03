import * as React from 'react';

import styles from './CarouselItem.scss';

const CarouselItem: React.FC = () => {
  return (
    <div className={styles.carouselItem}>
      <div className={styles.content}>
        <img
          className={styles.contentImg}
          src="https://www.swiatksiazki.pl/media/catalog/product/cache/a946e6dbdb55333e1c3d566a3e38b923/7/2/7299906600872.jpg"></img>
        <div className={styles.contentText}>
          <h4 className={styles.contentTitle}>Virion. Tom 4. Szermierz </h4>
          <p className={styles.contentAuthor}>Andrzej Ziemiański</p>
          <p className={styles.contentDescryption}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ultricies urna sem, et euismod turpis pharetra sed. Morbi malesuada
            erat ligula, in euismod ipsum congue ac. Duis laoreet finibus diam,
            a fermentum est sodales eget.
          </p>
          <button className={styles.contentButton}>BUTTON</button>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
