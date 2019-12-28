import * as React from 'react';

import { render, getAllByTestId } from '@testing-library/react';

import List from './List';
import BookListItem from './ListItem/BookListItem';

import mockedBooks from '../../__mocks__/Books';

describe('List', () => {
  it('Should render List component', () => {
    const { getAllByTestId } = render(
      <List
        items={mockedBooks}
        title={'Ksiazki'}
        render={(book: mockedBooks): JSX.Element => (
          <BookListItem
            key={book.id}
            id={book.id}
            author={book.author}
            title={book.title}
          />
        )}
      />,
    );
    const books = [...mockedBooks];
    const ListItems = getAllByTestId('BookListItem').forEach((li, i) => {
      expect(li.textContent).toContain(books[i].author);
      expect(li.textContent).toContain(books[i].title);
    });
  });
});
