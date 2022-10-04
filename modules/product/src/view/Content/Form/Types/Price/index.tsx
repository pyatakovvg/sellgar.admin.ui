
import { SelectField, InputField } from "@library/kit";

import React from 'react';
import { useSelector } from "react-redux";

import { selectCurrencies } from "../../../../../store/slice";

import styles from './default.module.scss';


interface IProps {
  inProcess: boolean;
}


function Price({ inProcess }: IProps) {
  const currencies = useSelector(selectCurrencies);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['price']}>
        <InputField
          label={'Цена'}
          name={'price'}
          disabled={inProcess}
        />
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

export default Price;
