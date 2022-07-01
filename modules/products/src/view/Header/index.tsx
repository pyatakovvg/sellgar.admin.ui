
import { Button, Header } from '@library/kit';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { createProduct } from '../../index';

import styles from './default.module.scss';


function HeaderPage(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleAdd() {
    const result = await dispatch<any>(createProduct());

    if (result) {
      navigate(process.env['PUBLIC_URL'] + '/products/' + result['uuid'])
    }
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Header level={2}>Витрина</Header>
      </div>
      <div className={styles['control']}>
        <Button onClick={handleAdd}>Добавить</Button>
      </div>
    </div>
  );
}

export default HeaderPage;