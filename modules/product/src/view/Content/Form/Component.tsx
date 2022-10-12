
import React from 'react';

import Images from './Images';
import Title from './Title';
import Types from './Types';
import Price from './Price';
import Attributes from './Attributes';
import Description from './Description';

import styles from './default.module.scss';


function Form({ handleSubmit }: any) {
  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['block']}>
        <Images />
      </div>
      <div className={styles['block']}>
        <Title />
      </div>
      <div className={styles['block']}>
        <Types />
      </div>
      <div className={styles['block']}>
        <Price />
      </div>
      <div className={styles['block']}>
        <Attributes />
      </div>
      <div className={styles['block']}>
        <Description />
      </div>
    </form>
  );
}

export default Form;