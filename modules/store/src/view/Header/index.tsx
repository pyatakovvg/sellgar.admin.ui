
import { openDialog } from '@package/dialog';
import { Header, Button } from '@library/kit';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectInProcess } from '../../store/slice';

import styles from './default.module.scss';


function Controls() {
  const dispatch = useDispatch();

  const inProcess = useSelector(selectInProcess);

  async function handleAdd() {
    dispatch(openDialog('modify'));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Header level={2}>Склад</Header>
      </div>
      <div className={styles['controls']}>
        <div className={styles['button']}>
          <Button mode={'primary'} disabled={inProcess} onClick={handleAdd}>Загрузить</Button>
        </div>
        <div className={styles['button']}>
          <Button mode={'success'} disabled={inProcess} onClick={handleAdd}>Добавить товар</Button>
        </div>
      </div>
    </div>
  );
}

export default Controls;