
import { Text } from "@library/kit";

import React from 'react';

import styles from './default.module.scss';


function Description(props: Partial<IBrand>) {
  return (
    <div className={styles['wrapper']}>
      <Text>{ props.description || '---' }</Text>
    </div>
  );
}

export default Description;