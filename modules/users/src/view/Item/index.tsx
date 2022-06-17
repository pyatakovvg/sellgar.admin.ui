
import { Text } from '@library/kit';

import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  index: number;
  login: string;
}


function Item({ index, login }: IProps): JSX.Element {
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-ellipsis'), []);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['index']}>
        <Text type={'description'}>{ index }.</Text>
      </div>
      <div className={styles['login']}>
        <Text type={'strong'}>{ login }</Text>
      </div>
      <div className={styles['control']}>
        <span className={iconClassName} />
      </div>
    </div>
  );
}

export default Item;