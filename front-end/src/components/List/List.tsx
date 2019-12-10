import * as React from 'react';

import * as styles from './List.scss';

interface OwnProps<T> {
  items: T[];
  listName: string;
  render: (element: {}) => JSX.Element;
}

function List<T>(props: OwnProps<T>): JSX.Element {
  return (
    <ul className={styles.list}>
      <div className={styles.listHeader}>{props.listName}</div>
      {props.items.map(element => props.render(element))}
    </ul>
  );
}

export default List;
