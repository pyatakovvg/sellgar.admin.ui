
import React from 'react';

import Message from './Message';

import styles from './default.module.scss';


function Item({ children, ...item }: any) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Message {...item} />
      </div>
      { !! children.length && (
        <div className={styles['children']}>
          {children.map((item: any) => (
            <div key={item['uuid']} className={styles['item']}>
              <Item {...item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Item;