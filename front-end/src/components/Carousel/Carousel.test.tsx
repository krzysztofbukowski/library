import * as React from 'react';

import { render } from '@testing-library/react';

import Carousel from './Carousel';

import MockedBooks from '../../__mocks__/Books.js';

test('Should render Carousel component', () => {
  const { getAllByTestId } = render(<Carousel />);

  const books = [...MockedBooks];

  const CarouselItems = getAllByTestId('CarouselItem').forEach((item, i) => {
    expect(item.textContent).toContain(books[i].title);
    expect(item.textContent).toContain(books[i].author);
    expect(item.textContent).toContain(books[i].description);
  });
});
