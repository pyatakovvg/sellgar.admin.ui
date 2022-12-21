
import { Text } from "@library/kit";

import React from 'react';

import styles from './default.module.scss';


function Unit(props: Partial<IAttribute>) {
  return (
    <div className={styles['wrapper']}>
      <Text>{ props?.unit?.name || '---' }</Text>
    </div>
  );
}

export default Unit;