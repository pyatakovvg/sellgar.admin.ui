
import { Header, Text } from "@library/kit";

import React from 'react';

import styles from './default.module.scss';


function Information(props: Partial<IGroup>) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['line']}>
        <Header level={4}>{ props.name }</Header>
      </div>
      <div className={styles['line']}>
        <Text>Код: <strong>{ props.code }</strong></Text>
      </div>
    </div>
  );
}

export default Information;