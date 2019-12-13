import * as React from 'react';

import styles from './ReaderListItem.scss';

interface OwnProps {
  id: string;
  firstname: string;
  lastname: string;
  avatarimg?: string;
}

function ReaderListItem(props: OwnProps): JSX.Element {
  return (
    <li>
      <div className={styles.readerListItem}>
        <img className={styles.avatarImg} src={props.avatarimg} alt="" />
        <div
          className={styles.text}>{`${props.firstname} ${props.lastname}`}</div>
      </div>
    </li>
  );
}

export default ReaderListItem;
