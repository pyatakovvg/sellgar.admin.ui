
import { Text } from '@library/kit';
import numeral from '@package/numeral';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  modes: Array<any>;
}


function Label({ label, children }: any) {
  return (
    <div className={styles['row']}>
      <div className={styles['label']}>
        <Text type={'strong'}>{ label }</Text>
      </div>
      <div className={styles['content']}>
        <Text>{ children }</Text>
      </div>
    </div>
  );
}

function Item({ modes }: IProps): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      {modes.map((item) => (
        <Label key={item['uuid']} label={`${item['value']} [${item['vendor']}]`}> - { numeral(item['price']).format() } { item['currency']['displayName'] }</Label>
      ))}
    </div>
  );
}

export default Item;