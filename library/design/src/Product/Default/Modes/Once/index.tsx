
import React from 'react';

import styles from './default.module.scss';


interface IMode {
  value: string;
  unit: string;
  active?: boolean;
  disabled?: boolean;
  onClick?(): void;
}


function Onec({ value, unit }: IMode) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>{ value } { unit }</div>
    </div>
  );
}

export default Onec;
