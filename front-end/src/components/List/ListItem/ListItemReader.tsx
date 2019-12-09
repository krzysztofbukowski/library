import * as React from 'react';

interface OwnProps {
  id: string;
  name: string;
  lastname: string;
}

function ListItemReader(props: OwnProps): JSX.Element {
  return (
    <>
      <li>
        {props.name}
        {props.lastname}
      </li>
    </>
  );
}

export default ListItemReader;
