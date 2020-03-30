import * as React from 'react';
import { useState, useEffect } from 'react';

import * as styles from './Carousel.scss';

import CarouselItem from './CarouselItem';

import Books from '../../__mocks__/Books.js';

import Book from '../../models/Book';

import iconPrev from '../../assets/icons/arrow_prev.svg';

let isTransitionEnabled = false;
const initialBooksLenght = Books.length;
let indexOfClonedElement = 0;

const Carousel: React.FC = () => {
  const [offsetLeft, setOffsetLeft] = useState(0);

  let carouselItemWidth;

  const carouselContentRef: React.RefObject<HTMLDivElement> = React.createRef();

  const getContentWidth = (): number => carouselContentRef.current.offsetWidth;

  const addBookAtTheEnd = (): Book[] => {
    const firstElement = Books[indexOfClonedElement];

    if (indexOfClonedElement === initialBooksLenght) {
      indexOfClonedElement = 0;
    }

    indexOfClonedElement++;

    Books.push(firstElement);

    return Books;
  };

  const getItemWidth = (): number => {
    const carouselContentWidth = getContentWidth();

    return Math.round(carouselContentWidth / Books.length);
  };

  useEffect(() => {
    setTimeout((): boolean => (isTransitionEnabled = true), 0);

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
    setOffsetLeft(temp => temp - carouselItemWidth);

    addBookAtTheEnd();
  };

  const handleClickOnNextBtn = (): void => {
    setOffsetLeft(temp => temp + carouselItemWidth);
  };

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselContent}
        ref={carouselContentRef}
        style={{
          transform: `translateX(${offsetLeft}px)`,
          transition: isTransitionEnabled ? 'transform 1s' : '',
        }}>
        {Books.map(
          (book: Book): JSX.Element => (
            <CarouselItem
              key={book.id}
              title={book.title}
              author={book.author}
              description={book.description}
            />
          ),
        )}
        ;
      </div>
      {Books.length <= 1 ? null : (
        <>
          <div
            onClick={(): void => handleClickOnNextBtn()}
            className={styles.carouselPrevBtn}>
            <img className={styles.iconImg} src={iconPrev} />
          </div>
          <div
            onClick={(): void => handleClickOnPrevBtn()}
            className={styles.carouselNextBtn}>
            <img
              className={`${styles.iconImg} ${styles.nextBtnIcon}`}
              src={iconPrev}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
