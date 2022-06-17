
import { Header, EditorField } from "@library/kit";

import React from 'react';

import styles from './default.module.scss';


function Description() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={4}>Описание</Header>
      </div>
      <div className={styles['content']}>
        <div className={styles['fields']}>
          <div className={styles['field']}>
            <EditorField name={'description'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
