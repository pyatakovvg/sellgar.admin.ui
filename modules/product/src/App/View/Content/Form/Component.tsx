
import React from 'react';
import type { InjectedFormProps } from 'redux-form';

import Title from './Title';
import Types from './Types';
import Images from './Images';
import Product from './Product';
import Attributes from './Attributes';
import Description from './Description';

import styles from './default.module.scss';


function Form({ handleSubmit }: InjectedFormProps<IProduct>) {
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
        <Product />
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