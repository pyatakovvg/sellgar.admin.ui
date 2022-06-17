
import { Header, Text } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


function Test(): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Header>Дашбоард</Header>
      </header>
      <section className={styles['content']}>
        <Text>Информация и статусы</Text>
      </section>
    </section>
  );
}

export default Test;