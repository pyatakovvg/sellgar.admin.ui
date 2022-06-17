
import { Header, InputField, Button } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  handleSubmit(data: any): void;
}


function Form({ handleSubmit }: IProps): JSX.Element {
  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['header']}>
        <Header level={4}>Авторизация</Header>
      </div>
      <div className={styles['fields']}>
        <div className={styles['field']}>
          <InputField name={'login'} type={'text'} placeholder={'Логин'} autoFocus />
        </div>
        <div className={styles['field']}>
          <InputField name={'password'} type={'password'} placeholder={'Пароль'} />
        </div>
      </div>
      <div className={styles['controls']}>
        <Button type={'submit'}>Войти</Button>
      </div>
    </form>
  );
}

export default Form;