
import { InputField, SelectField } from '@library/kit';

import React from 'react';
import { useSelector } from 'react-redux';

import { selectCurrencies, selectInProcess } from '../../../../store/slice';

import styles from './default.module.scss';


function Prices() {
  const inProcess = useSelector(selectInProcess);
  const currencies = useSelector(selectCurrencies);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['field']}>
          <InputField
            required
            label={'Цена продажи'}
            name={'price'}
            disabled={inProcess}
          />
        </div>
        <div className={styles['field']}>
          <InputField
            required
            label={'Цена закупки'}
            name={'purchasePrice'}
            disabled={inProcess}
          />
        </div>
      </div>
      <div className={styles['currency']}>
        <SelectField
          required
          name="currencyCode"
          label="Валюта"
          options={currencies}
          optionKey="code"
          optionValue="displayName"
          disabled={inProcess}
        />
      </div>
    </div>
  );
}

export default Prices;
