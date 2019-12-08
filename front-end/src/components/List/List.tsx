import * as React from 'react';

import * as styles from './List.scss';

import ListItem from './ListItem';

const List: React.FC = props => (
  <ul className={styles.list}>
    {props.data.map(element => (
      <ListItem
        id={element.id}
        key={element.id}
        title={element.title}
        author={element.author}
      />
    ))}
  </ul>
);
export default List;
