
import { Logotype } from '@library/kit';

import React from 'react';

import Form from './Form';

import styles from './@media/index.module.scss';


function View() {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['header']}>
          <Logotype />
        </div>
        <div className={styles['form']}>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default View;
