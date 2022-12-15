
import { openDialog } from '@package/dialog';
import { Header, Button } from '@library/kit';

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
      <div className={styles['content']}>
        <Header level={2}>Единица измерения</Header>
      </div>
      <div className={styles['controls']}>
        <div className={styles['create']}>
          <Button disabled={inProcess} onClick={handleAdd}>Добавить</Button>
        </div>
      </div>
    </div>
  );
}

export default Controls;