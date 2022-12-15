
import { Button } from '@library/kit';
import { openDialog } from '@package/dialog';

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
      <div className={styles['control']}>
        <Button mode={'success'} disabled={inProcess} onClick={handleAdd}>Добавить товар</Button>
      </div>
    </div>
  );
}

export default Controls;