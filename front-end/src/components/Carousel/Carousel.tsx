import * as React from 'react';
import { useState, useEffect } from 'react';

import * as styles from './Carousel.scss';

import CarouselItem from './CarouselItem';

import Books from '../../__mocks__/Books.js';

import Book from '../../models/Book';

const Carousel: React.FC = () => {
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  let carouselItemWidth;

  const carouselContentRef: React.RefObject<HTMLDivElement> = React.createRef();

  const getContentWidth = (): number => carouselContentRef.current.offsetWidth;

  const addBookForStarters = (): Book[] => {
    const BookTable = Books;
    const LastElement = Books.pop();

    BookTable.unshift(LastElement);

    return BookTable;
  };

  const getItemWidth = (): number => {
    const carouselContentWidth = getContentWidth();

    return Math.round(carouselContentWidth / Books.length);
  };

  useEffect((): void => {
    setIsLoaded(true);

    const itemWidth = getItemWidth();
    const windowWidth = window.innerWidth;
    const gap = (windowWidth - itemWidth) / 2;

    setOffsetLeft(gap);
  }, []);

  useEffect((): void => {
    const itemWidth = getItemWidth();

    carouselItemWidth = itemWidth;
  }, [offsetLeft]);

  const handleClickOnPrevBtn = (): void => {
    Books === addBookForStarters();

    setOffsetLeft(offsetLeft - carouselItemWidth);
  };

  const handleClickOnNextBtn = (): void => {
    setOffsetLeft(offsetLeft + carouselItemWidth);
  };

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselContent}
        ref={carouselContentRef}
        style={{
          transform: `translateX(${offsetLeft}px)`,
          transition: isLoaded ? 'transform 2s' : '',
        }}>
        {Books.map(
          (book): JSX.Element => (
            <CarouselItem key={book.id} />
          ),
        )}
        ;
      </div>
      {Books.length <= 1 ? null : (
        <>
          <button
            onClick={(): void => handleClickOnPrevBtn()}
            className={styles.carouselPrevBtn}>
            lewa
          </button>
          <button
            onClick={(): void => handleClickOnNextBtn()}
            className={styles.carouselNextBtn}>
            prawa
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
