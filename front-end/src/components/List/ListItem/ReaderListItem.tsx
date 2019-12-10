import * as React from 'react';

import styles from './ReaderListItem.scss';

interface OwnProps {
  id: string;
  name: string;
  lastname: string;
}

function ReaderListItem(props: OwnProps): JSX.Element {
  return (
    <>
      <li>
        {props.name}
        {props.lastname}
      </li>
    </>
  );
}

export default ReaderListItem;
