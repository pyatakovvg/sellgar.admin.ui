
import moment from "@package/moment";
import { Text } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  createdAt: string;
  updatedAt: string;
}


function Label({ label, children }: any) {
  return (
    <div className={styles['row']}>
      <div className={styles['label']}>
        <Text type={'description'}>{ label }</Text>
      </div>
      <div className={styles['content']}>
        <Text type={'description'}>{ children }</Text>
      </div>
    </div>
  );
}

function Item({ createdAt, updatedAt }: IProps): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <Label label={'Добавлен'}>{ moment(createdAt).format('DD.MM.YYYY в HH:mm') }</Label>
      <Label label={'Изменен'}>{ moment(updatedAt).format('DD.MM.YYYY в HH:mm') }</Label>
    </div>
  );
}

export default Item;