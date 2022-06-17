
import { Button } from '@library/kit';

import React from 'react';

import Images from './Images';
import Types from './Types';
import Common from './Common';
import Modes from './Modes';
import Attributes from './Attributes';
import Description from './Description';

import styles from './default.module.scss';


function Form({ handleSubmit, valid, pristine }: any) {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles['block']}>
        <Images />
      </div>
      <div className={styles['block']}>
        <Types />
      </div>
      <div className={styles['block']}>
        <Common />
      </div>
      <div className={styles['block']}>
        <Modes />
      </div>
      <div className={styles['block']}>
        <Attributes />
      </div>
      <div className={styles['block']}>
        <Description />
      </div>
      <div className={styles['controls']}>
        <Button type={'submit'} disabled={ ! valid || pristine}>Отправить</Button>
      </div>
    </form>
  );
}

export default Form;