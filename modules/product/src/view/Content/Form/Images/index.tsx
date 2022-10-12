
import React from 'react';
import { useSelector } from 'react-redux';
import { Field, getFormValues } from 'redux-form';

import Form from './Form';
import Empty from './Empty';

import styles from './default.module.scss';


function Images() {
  const values = useSelector(getFormValues('modify')) as any;

  if ( ! values['images'].length) {
    return (
      <div className={styles['wrapper']}>
        <Empty />
      </div>
    );
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Field name="images" component={Form} />
      </div>
    </div>
  );
}

export default Images;
