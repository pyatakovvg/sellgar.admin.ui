
import { signIn } from '@widget/profile';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Form from './Form';

import styles from './@media/index.module.scss';


function SignIn(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(data: any) {
    const isSuccess = await dispatch<any>(signIn(data));

    if (isSuccess) {
      navigate(process.env['PUBLIC_URL'] + '/')
    }
  }

  return (
    <section className={styles['wrapper']}>
      <Form onSubmit={handleSubmit} />
    </section>
  );
}

export default SignIn;