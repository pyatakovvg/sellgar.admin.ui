
import React from 'react';

import Content from './Content';

import styles from './@media/index.module.scss';


function Form({ type, handleSubmit }: any) {
  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['content']}>
        <Content type={type} />
      </div>
    </form>
  );
}

export default Form;
