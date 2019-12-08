import * as React from 'react';

import * as styles from './ListItem.scss';

interface ListItemProps {
  id: number;
  title: string;
  author: string;
}

const ListItem: React.SFC = (props: ListItemProps) => (
  <li className={styles.listItem}>
    {props.title}
    {props.author}
  </li>
);

export default ListItem;
