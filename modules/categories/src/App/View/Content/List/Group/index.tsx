
import { Text } from "@library/kit";

import React from 'react';

import styles from './default.module.scss';


function Group(props: Partial<ICategory>) {
  return (
    <div className={styles['wrapper']}>
      <Text>{ props?.group?.name || '---' }</Text>
    </div>
  );
}

export default Group;