
import { Header, Button } from '@library/kit';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isPristine, isValid, submit } from "redux-form";

import { selectInProcess } from '../../index';

import styles from './default.module.scss';


function Controls() {
  const dispatch = useDispatch();

  const inProcess = useSelector(selectInProcess);
  const valid = useSelector(isValid('modify'));
  const pristine = useSelector(isPristine('modify'));

  function handleSubmit() {
    dispatch(submit('modify'));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Header level={2}>Редактировать товар</Header>
      </div>
      <div className={styles['controls']}>
        <div className={styles['create']}>
          <Button mode={'success'} disabled={ ! valid || pristine || inProcess} onClick={handleSubmit}>Сохранить</Button>
        </div>
      </div>
    </div>
  );
}

export default Controls;