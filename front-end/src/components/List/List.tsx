import * as React from 'react';

import * as styles from './List.scss';

interface OwnProps<T> {
  items: T[];
  title: string;
  render: (element: {}) => JSX.Element;
}

function List<T>(props: OwnProps<T>): JSX.Element {
  return (
    <ul className={styles.list}>
      <h3 className={styles.listHeader}>{props.title}</h3>
      {props.items.map(element => props.render(element))}
    </ul>
  );
}

export default List;
