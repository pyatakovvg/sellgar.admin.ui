
import { Text } from '@library/kit';

import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


function Header() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['label']}>
        <span className={cn(styles['icon'], 'fas fa-arrows-alt')} />
      </div>
      <div className={styles['label']}>
        <Text>T</Text>
      </div>
      <div className={styles['label']}>
        <Text>A</Text>
      </div>
      <div className={styles['label']}>
        <Text>Артикул</Text>
      </div>
      <div className={styles['label']}>
        <Text>Значение</Text>
      </div>
      <div className={styles['label']}>
        <Text>Цена</Text>
      </div>
      <div className={styles['label']}>
        <Text>Валюта</Text>
      </div>
      <div className={styles['label']}>
        <span className={cn(styles['icon'], 'fas fa-exclamation')} />
      </div>
    </div>
  );
}

export default Header;
