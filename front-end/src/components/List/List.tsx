import * as React from 'react';

import * as styles from './List.scss';

interface OwnProps<T> {
  items: T[];
  render: (element: {}) => JSX.Element;
}

function List<T>(props: OwnProps<T>): JSX.Element {
  return (
    <ul className={styles.list}>
      {props.items.map(element => props.render(element))}
    </ul>
  );
}

export default List;
