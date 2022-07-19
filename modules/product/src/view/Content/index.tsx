
import { Text } from '@library/kit';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Form from './Form';

import { selectData, updateProduct } from '../../index';

import styles from './default.module.scss';


function Content(): JSX.Element {
  const dispatch = useDispatch();

  const data: any = useSelector(selectData);

  async function handleSubmit(data: any) {
    await dispatch<any>(updateProduct(data));
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
      initialValues={data}
      onSubmit={handleSubmit}
    />
  );
}

export default Content;