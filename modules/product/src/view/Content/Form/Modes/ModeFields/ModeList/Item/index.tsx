
import { InputField, CheckboxField, SelectField, Radio } from '@library/kit';

import React from 'react';
import { useSelector } from "react-redux";

import { selectCurrencies } from '../../../../../../../index';

import cn from 'classnames';
import styles from './default.module.scss';


interface IModifyFieldProps {
  field: string;
  disabled: boolean;
  onRemove(): void;
}


function Item({ field, disabled, onRemove }: IModifyFieldProps) {
  const currencies = useSelector(selectCurrencies);

  function handleRemove() {
    onRemove && onRemove();
  }

  const classNameRemoveAttr = cn(styles['attr__remove'], 'far fa-trash-alt');

  return (
    <div className={styles['attr']}>
      <div className={styles['radio']}>
        <Radio value={`${field}.isTarget`} />
      </div>
      <div className={styles['checkbox']}>
        <CheckboxField name={`${field}.isUse`} />
      </div>
      <div className={styles['attr__value']}>
        <InputField
          required
          name={`${field}.vendor`}
          disabled={disabled}
        />
      </div>
      <div className={styles['attr__title']}>
        <InputField
          required
          name={`${field}.value`}
          disabled={disabled}
        />
      </div>
      <div className={styles['attr__price']}>
        <InputField
          required
          name={`${field}.price`}
          disabled={disabled}
        />
      </div>
      <div className={styles['attr__currency']}>
        <SelectField
          required
          simple
          clearable={false}
          name={`${field}.currencyCode`}
          options={currencies}
          optionKey="code"
          optionValue="displayName"
          disabled={disabled}
        />
      </div>
      <div className={styles['attr__controls']}>
        <span className={classNameRemoveAttr} onClick={() => handleRemove()} />
      </div>
    </div>
  );
}

export default Item;
