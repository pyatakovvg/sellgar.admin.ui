
import { EditorField } from "@library/kit";

import React from 'react';

import styles from './default.module.scss';


function Description() {
  return (
    <div className={styles['wrapper']}>
      <EditorField name={'description'} />
    </div>
  );
}

export default Description;
