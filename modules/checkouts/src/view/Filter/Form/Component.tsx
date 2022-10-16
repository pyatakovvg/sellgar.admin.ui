
import { SelectField, InputField, Button } from '@library/kit';

import React from 'react';
import { useSelector } from 'react-redux';

import { selectStatuses, selectDelivery, selectPayments } from '../../../store/slice';

import styles from './default.module.scss';


function Form({ handleSubmit }: any) {
  const statuses = useSelector(selectStatuses);
  const delivery = useSelector(selectDelivery);
  const payments = useSelector(selectPayments);

  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['fields']}>
        <div className={styles['field']}>
          <InputField label={'Номер заказа'} name={'externalId'} />
        </div>
        <div className={styles['field']}>
          <SelectField
            clearable
            label={'Статус'}
            name={'statusCode'}
            placeholder={'Все'}
            options={statuses}
            optionKey={'code'}
            optionValue={'displayName'}
          />
        </div>
      </div>
      <div className={styles['fields']}>
        <div className={styles['field']}>
          <SelectField
            clearable
            label={'Способ доставки'}
            name={'deliveryCode'}
            placeholder={'Все'}
            options={delivery}
            optionKey={'code'}
            optionValue={'name'}
          />
        </div>
        <div className={styles['field']}>
          <SelectField
            clearable
            label={'Способ оплаты'}
            name={'paymentCode'}
            placeholder={'Все'}
            options={payments}
            optionKey={'code'}
            optionValue={'name'}
          />
        </div>
        <div className={styles['control']}>
          <Button type={'submit'}>Применить</Button>
        </div>
      </div>
    </form>
  );
}

export default Form;
