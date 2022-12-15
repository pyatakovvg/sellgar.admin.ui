
import { Header, Input, Button } from '@library/kit';

import React from 'react';
import { useForm } from 'effector-forms';
import { useStore } from 'effector-react';
import { useNavigate } from 'react-router-dom';

import authForm, { authFx } from '../../model/authForm';

import styles from './@media/index.module.scss';


function Form() {
  const navigate = useNavigate();

  const { fields, submit } = useForm(authForm);
  const isPending = useStore(authFx.pending);

  React.useEffect(() => {
    authFx.doneData.watch(() => {
      navigate(process.env['PUBLIC_URL'] + '/')
    });
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submit();
  }

  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['header']}>
        <Header level={2}>Авторизация</Header>
      </div>
      <div className={styles['fields']}>
        <div className={styles['field']}>
          <Input
            autoFocus
            type={'text'}
            disabled={isPending}
            placeholder={'Логин'}
            name={fields.login.name}
            value={fields.login.value}
            mode={fields.login.hasError() ? 'danger' : 'default'}
            onChange={(e) => fields.login.onChange(e.target.value)}
          />
        </div>
        <div className={styles['field']}>
          <Input
            type={'password'}
            disabled={isPending}
            placeholder={'Пароль'}
            name={fields.password.name}
            value={fields.password.value}
            mode={fields.password.hasError() ? 'danger' : 'default'}
            onChange={(e) => fields.password.onChange(e.target.value)}
          />
        </div>
      </div>
      <div className={styles['controls']}>
        <Button
          type={'submit'}
          disabled={isPending}
        >Войти в кабинет</Button>
      </div>
    </form>
  );
}

export default Form;