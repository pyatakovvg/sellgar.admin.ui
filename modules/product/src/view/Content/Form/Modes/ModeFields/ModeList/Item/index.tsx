
import { InputField, CheckboxField, SelectField } from '@library/kit';

import React from 'react';
import { getFormValues, change } from "redux-form";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrencies } from '../../../../../../../index';

import cn from 'classnames';
import styles from './default.module.scss';


interface IModifyFieldProps {
  field: string;
  disabled: boolean;
  onRemove(): void;
}


function Item({ field, disabled, onRemove }: IModifyFieldProps) {
  const dispatch = useDispatch();

  const currencies = useSelector(selectCurrencies);
  const values: any = useSelector(getFormValues('modify'));

  function handleRemove() {
    onRemove && onRemove();
  }

  function handleChangeTarget() {
    for (let index in values['modes']) {
      dispatch(change('product-modify', 'modes[' + index + '].isTarget', false));
    }
    dispatch(change('product-modify', `${field}.isTarget`, true));
  }

  const classNameRemoveAttr = cn(styles['attr__remove'], 'far fa-trash-alt');

  return (
    <div className={styles['attr']}>
      <div className={styles['checkbox']}>
        <CheckboxField name={`${field}.isTarget`} onChange={() => handleChangeTarget()} />
      </div>
      <div className={styles['checkbox']}>
        <CheckboxField name={`${field}.isUse`} />
      </div>
      <div className={styles['attr__value']}>
        <InputField
          require
          name={`${field}.vendor`}
          disabled={disabled}
        />
      </div>
      <div className={styles['attr__title']}>
        <InputField
          require
          name={`${field}.value`}
          disabled={disabled}
        />
      </div>
      <div className={styles['attr__price']}>
        <InputField
          require
          name={`${field}.price`}
          disabled={disabled}
        />
      </div>
      <div className={styles['attr__currency']}>
        <SelectField
          require
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
