
import { Text } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  title: string;
  modes: Array<any>;
}


// function Label({ label, children, isUse, isTarget }: any) {
//   return (
//     <div className={styles['row']}>
//       <div className={styles['label']}>
//         <Text type={'description'}>{ label }</Text>
//       </div>
//       <div className={styles['content']}>
//         <Text type={'description'}>{ children }</Text>
//       </div>
//       {isUse && (
//         <span className={styles['is-use']}>A</span>
//       )}
//       {isTarget && (
//         <span className={styles['is-target']}>T</span>
//       )}
//     </div>
//   );
// }

function Item({ title }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Text type={'strong'}>{ title || 'нет названия' }</Text>
      </div>
      <div className={styles['modes']}>
        {/*{modes.map((item) => (*/}
        {/*  <Label key={item['uuid']} {...item} label={`${item['value']} [${item['vendor']}]`}> - { numeral(item['price']).format() } { item['currency']['displayName'] }</Label>*/}
        {/*))}*/}
      </div>
    </div>
  );
}

export default Item;