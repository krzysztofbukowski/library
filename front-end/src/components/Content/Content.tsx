import * as React from 'react';

import * as styles from './Content.scss';

const Content: React.FC = () => (
  <main>
    <div className={styles.content}>
      <div className={styles.main}></div>
      <div className={styles.aside}></div>
    </div>
  </main>
);

export default Content;
