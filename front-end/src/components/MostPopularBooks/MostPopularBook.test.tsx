import * as React from 'react';

import { render } from '@testing-library/react';

import MostPopularBooks from './MostPopularBooks';

import MockedBooks from '../../__mocks__/Books.js';

test('Should render MostPopularBooks component', () => {
  const { getAllByTestId } = render(<MostPopularBooks books={MockedBooks} />);

  const books = [...MockedBooks];

  const BookCards = getAllByTestId('BookCard').forEach((item, i) => {
    expect(item.textContent).toContain(books[i].title);
    expect(item.textContent).toContain(books[i].author);
  });
});
