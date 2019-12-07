import * as React from 'react';

import * as styles from './Content.scss';

import List from '../List';

const Content: React.FC = () => (
  <>
    <main className={styles.main}>
      <div className={styles.content}></div>
    </main>
    <aside className={styles.aside}>
      <List />
    </aside>
  </>
);

export default Content;
