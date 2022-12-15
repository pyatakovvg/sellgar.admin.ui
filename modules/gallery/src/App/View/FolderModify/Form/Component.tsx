
import { Header, InputField, Button } from '@library/kit';

import React from 'react';
import { InjectedFormProps } from 'redux-form';

import styles from './default.module.scss';


function Form({ handleSubmit }: InjectedFormProps<IFolder>) {
  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['header']}>
        <Header level={3}>Каталог</Header>
      </div>
      <div className={styles['content']}>
        <InputField name={'name'} label={'Название'} />
      </div>
      <div className={styles['controls']}>
        <Button type={'submit'} mode={'success'}>Сохранить</Button>
      </div>
    </form>
  );
}

export default Form;
