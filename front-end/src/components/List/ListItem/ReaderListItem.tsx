import * as React from 'react';

import styles from './ReaderListItem.scss';

interface OwnProps {
  id: string;
  firstname: string;
  lastname: string;
}

function ReaderListItem(props: OwnProps): JSX.Element {
  return (
    <>
      <li>
        {props.firstname}
        {props.lastname}
      </li>
    </>
  );
}

export default ReaderListItem;
