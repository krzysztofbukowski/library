import * as React from 'react';

import * as styles from './Content.scss';

import List from '../List';

import Books from '../../MockData/Books';
import Readers from '../../MockData/Readers';

const Content: React.FC = () => (
  <>
    <main className={styles.main}>
      <div className={styles.content}></div>
    </main>
    <aside className={styles.aside}>
      <List data={Books} />
      <List data={Readers} />
    </aside>
  </>
);

export default Content;
