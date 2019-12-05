import * as React from 'react';

import * as styles from './Content.scss';

const Content: React.FC = () => (
  <main>
    <div className={styles.content}>
      <div className={styles.popularBooks}></div>
      <div className={styles.lists}></div> {/*Temporary name of class*/}
    </div>
  </main>
);

export default Content;
