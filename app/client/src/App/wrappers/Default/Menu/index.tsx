
import React from 'react';

import Item from './Item';

import styles from './default.module.scss';


interface IProps {
  items: INavigate[];
}


function Menu({ items }: IProps) {
  return (
    <div className={styles['wrapper']}>
      {items.map((item, index: number) => (
        <Item key={index} {...item} />
      ))}
    </div>
  );
}

export default React.memo(Menu);
