
import React from 'react';

import Item from './Item';

import styles from './default.module.scss';


interface IProps {
  items: Array<object>;
}


function Default({ items }: IProps): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </div>
  );
}

Default.defaultProps = {
  items: [],
};

export default Default;
