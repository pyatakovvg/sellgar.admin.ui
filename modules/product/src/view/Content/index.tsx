
import { Text } from '@library/kit';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Form from './Form';

import { selectData, selectCurrencies, updateProduct } from '../../index';

import styles from './default.module.scss';


function Content() {
  const dispatch = useDispatch();

  const data: any = useSelector(selectData);
  const currencies: any = useSelector(selectCurrencies);
  const defaultCurrencyCode = React.useMemo(() => currencies?.[0]?.['code'] ?? null, [currencies]);

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
      initialValues={{
        ...data,
        currencyCode: data['currencyCode'] || defaultCurrencyCode,
      }}
      onSubmit={handleSubmit}
    />
  );
}

export default Content;