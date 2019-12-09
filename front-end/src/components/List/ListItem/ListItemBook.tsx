import * as React from 'react';

interface OwnProps {
  id: string;
  title: string;
  author: string;
}

function ListItemBook(props: OwnProps): JSX.Element {
  return (
    <>
      <li>
        {props.title}
        {props.author}
      </li>
    </>
  );
}

export default ListItemBook;
