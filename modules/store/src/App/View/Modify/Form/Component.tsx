
import { useGetBrands, useGetCurrencies } from '@package/base-data';
import { Header, InputField, TextareaField, SelectField, Button } from '@library/kit';


import React from 'react';
import type { InjectedFormProps } from 'redux-form';

import styles from './default.module.scss';


function Form({ handleSubmit }: InjectedFormProps<any>) {
  const brands = useGetBrands();
  const currencies = useGetCurrencies();

  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['header']}>
        <Header level={3}>Товар на складе</Header>
      </div>
      <div className={styles['content']}>
        <div className={styles['row']}>
          <InputField name={'name'} label={'Наименование'} required />
        </div>
        <div className={styles['row']}>
          <SelectField
            required
            clearable
            name={'brand.uuid'}
            label={'Производитель'}
            placeholder={'Выбрать из списка'}
            options={brands}
            optionKey={'uuid'}
            optionValue={'name'}
          />
        </div>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <InputField name={'vendor'} label={'Артикул'} required />
          </div>
          <div className={styles['col']}>
            <InputField name={'barcode'} label={'Штрихкод'} />
          </div>
        </div>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <InputField name={'count'} label={'Количество'} required />
          </div>
          <div className={styles['col']}>
            <InputField name={'reserve'} label={'Резерв'} required />
          </div>
        </div>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <InputField name={'price'} label={'Цена продажи'} required />
          </div>
          <div className={styles['col']}>
            <div className={styles['price']}>
              <InputField name={'purchasePrice'} label={'Цена закупки'} required />
            </div>
            <div className={styles['currency']}>
              <SelectField
                name={'currency.code'}
                label={'Валюта'}
                options={currencies}
                optionKey={'code'}
                optionValue={'displayName'}
              />
            </div>
          </div>
        </div>
        <div className={styles['row']}>
          <TextareaField name={'description'} label={'Описание'} />
        </div>
      </div>
      <div className={styles['controls']}>
        <Button type={'submit'} mode={'success'}>Сохранить</Button>
      </div>
    </form>
  );
}

export default Form;
