
import { Label } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


function FilterDefault(): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['label']}>
        <Label>Сортировать по:</Label>
      </div>
      <div className={styles['content']}>
        <div className={styles['block']}>
          <span className={styles['link']}>Популярности</span>
        </div>
        <div className={styles['block']}>
          <span className={styles['link']}>Рейтингу</span>
        </div>
      </div>
    </div>
  );
}

FilterDefault.defaultProps = {};

export default FilterDefault;
