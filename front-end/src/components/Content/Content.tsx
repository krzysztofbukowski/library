import * as React from 'react';

import * as styles from './Content.scss';

const Content: React.FC = () => (
  <>
    <main className={styles.main}>
      <div className={styles.content}></div>
    </main>
    <aside className={styles.aside} />
  </>
);

export default Content;
