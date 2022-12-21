
import { Text } from '@library/kit';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Form from './Form';

import { selectData } from '../../store/slice';
import { updateProduct } from '../../store/commands';

import styles from './default.module.scss';


function Content() {
  const dispatch = useDispatch();

  const data = useSelector(selectData);

  async function handleSubmit(data: any) {
    await dispatch(updateProduct(data));
  }

  if ( ! data) {
    return (
      <div className={styles['empty']}>
        <Text type={'strong'}>Нет данных для отображение</Text>
      </div>
    );
  }

  return (
    <Form
      initialValues={{
        ...data,
      }}
      onSubmit={handleSubmit}
    />
  );
}

export default Content;