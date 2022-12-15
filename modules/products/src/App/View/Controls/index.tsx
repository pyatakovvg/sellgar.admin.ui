
import { Button } from '@library/kit';

import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { selectInProcess } from '../../store/slice';
import { createProduct } from '../../store/commands';

import styles from './default.module.scss';


function Controls() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inProcess = useSelector(selectInProcess);

  async function handleAdd() {
    const result = await dispatch<any>(createProduct());

    if (result) {
      navigate(process.env['PUBLIC_URL'] + '/products/' + result['uuid'])
    }
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['control']}>
        <Button mode={'success'} disabled={inProcess} onClick={handleAdd}>Добавить</Button>
      </div>
    </div>
  );
}

export default Controls;