import * as React from 'react';

import * as styles from './ListItem.scss';

interface ListProps {
  id: number;
  title: string;
  author: string;
}

const ListItem: React.SFC = (props: ListProps) => (
  <li className={styles.listItem}>
    {props.title}
    {props.author}
  </li>
);

export default ListItem;
