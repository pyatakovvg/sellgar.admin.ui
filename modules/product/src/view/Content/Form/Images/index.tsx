
import Dialog from '@package/dialog';
import { Header } from '@library/kit';

import React from 'react';
import { Field, getFormValues } from "redux-form";
import { useDispatch, useSelector } from 'react-redux';

import Form from './Form';
import Gallery from './Gallery';

import styles from './default.module.scss';


function Images() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={4}>Изображения</Header>
      </div>
      <div className={styles['content']}>
        <Field name="gallery" component={Form} />
      </div>

      <Dialog name={'gallery'}>
        <Gallery />
      </Dialog>
    </div>
  );
}

export default Images;
