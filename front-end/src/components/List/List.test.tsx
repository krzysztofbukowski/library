import * as React from 'react';

import { render } from '@testing-library/react';

import List from './List';
import BookListItem from './ListItem/BookListItem';
import ReaderListItem from './ListItem/ReaderListItem';

import mockedBooks from '../../__mocks__/Books';
import mockedReaders from '../../__mocks__/Readers';

test('Should render BooksList component', () => {
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

test('Should render ReadersList component', () => {
  const { getAllByTestId } = render(
    <List
      items={mockedReaders}
      title={'Czytelnicy'}
      render={(reader: mockedReaders): JSX.Element => (
        <ReaderListItem
          key={reader.id}
          id={reader.id}
          firstname={reader.name}
          lastname={reader.lastname}
        />
      )}
    />,
  );
  const readers = [...mockedReaders];
  const ListItems = getAllByTestId('ReaderListItem').forEach((li, i) => {
    expect(li.textContent).toContain(readers[i].name);
    expect(li.textContent).toContain(readers[i].lastname);
  });
});
