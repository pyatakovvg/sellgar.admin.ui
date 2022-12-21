
import { Button } from '@library/kit';
import { openDialog } from '@package/dialog';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectInUploadProcess } from '../../store/slice';

import styles from './default.module.scss';


function Controls() {
  const dispatch = useDispatch();

  const inProcess = useSelector(selectInUploadProcess) as boolean;

  function handleAdd() {
    dispatch(openDialog('modify'));
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