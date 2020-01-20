import * as React from 'react';

import * as styles from './Thumbs.scss';

import Thumb from './Thumb/Thumb';

const Thumbs: React.FC = () => (
  <div className={styles.thumbs}>
    <div className={styles.thumbsTitle}>
      <h3 className={styles.thumbsTitleText}>Najpopularniejsze ksiazki</h3>
    </div>
    <Thumb />
    <Thumb />
    <Thumb />
    <Thumb />
  </div>
);

export default Thumbs;
