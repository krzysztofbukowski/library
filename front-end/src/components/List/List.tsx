import * as React from 'react';

import * as styles from './List.scss';

import ListItem from './ListItem';

import Data from '../../Data/Data';

const showData = Data.map(element => (
    <ListItem
      id={element.id}
      key={element.id}
      title={element.title}
      author={element.author}
    />
  )
);

const List: React.FC = () => (
  <ul className={styles.list}>
    {showData}
  </ul>
);

export default List;
