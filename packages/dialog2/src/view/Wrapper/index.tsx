
import React from 'react';

import styles from './defaults.module.scss';


interface IProps {
  children: any;
}


function Wrapper(props: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        { props.children }
      </div>
    </div>
  );
}

export default Wrapper;
