
import { Text } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


function Empty() {
  return (
    <div className={styles['wrapper']}>
      <Text>Нет данных для отображения</Text>
      <Text>Добавьте каталог или загрузите изображения</Text>
    </div>
  );
}

export default React.memo(Empty);