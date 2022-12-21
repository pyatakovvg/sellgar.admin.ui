
import { Header, Button } from '@library/kit';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isPristine, isValid, submit } from "redux-form";

import { copyProduct } from '../../store/commands';
import { selectInProcess, selectData, uploadingProductProcessAction } from '../../store/slice';

import styles from './default.module.scss';


function Controls() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector(selectData);
  const inProcess = useSelector(selectInProcess);
  const valid = useSelector(isValid('modify'));
  const pristine = useSelector(isPristine('modify'));

  async function handleCopy() {
    dispatch(uploadingProductProcessAction(true));
    const result = await dispatch(copyProduct(data['uuid']));
    if (result) {
      navigate(process.env['PUBLIC_URL'] + '/products/' + result['uuid']);
    }
    dispatch(uploadingProductProcessAction(false));
  }

  function handleSubmit() {
    dispatch(submit('modify'));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Header level={2}>Редактировать товар</Header>
      </div>
      <div className={styles['controls']}>
        <div className={styles['copy']}>
          <Button mode={'primary'} disabled={ ! valid || inProcess} onClick={handleCopy}>Копировать</Button>
        </div>
        <div className={styles['update']}>
          <Button mode={'success'} disabled={ ! valid || pristine || inProcess} onClick={handleSubmit}>Сохранить</Button>
        </div>
      </div>
    </div>
  );
}

export default Controls;