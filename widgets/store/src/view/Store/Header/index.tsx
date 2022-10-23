
import { Header } from '@library/kit';
import { nounDeclension } from "@helper/utils";

import React from 'react';
import { change } from 'redux-form';
import { useSelector, useDispatch } from 'react-redux';

import { selectMeta, selectData } from '../../../store/slice';

import styles from './@media/index.module.scss';


interface IProps {
  type?: 'multiple' | 'simple';
}


function Title({ type }: IProps) {
  const dispatch = useDispatch();

  const data = useSelector(selectData) as Array<any>;
  const meta = useSelector(selectMeta) as any;


  function handleReset() {
    dispatch(change('store', 'products', null));
  }

  function handleResetAll() {
    dispatch(change('store', 'products', []));
  }

  function handleSetAll() {
    dispatch(change('store', 'products', data.map((item) => item['uuid'])));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={3}>Всего { meta?.['totalRows'] ?? 0 } { nounDeclension(meta?.['totalRows'] ?? 0, ['товар', 'товара', 'товаров']) }</Header>
      </div>
      {type === 'simple' && (
        <div className={styles['control']}>
          <span className={styles['link']} onClick={handleReset}>Сбросить</span>
        </div>
      )}
      {type === 'multiple' && (
        <div className={styles['control']}>
          <span className={styles['link']} onClick={handleSetAll}>Выбрать все</span>
          <span className={styles['link']} onClick={handleResetAll}>Сбросить все</span>
        </div>
      )}
    </div>
  );
}

export default Title;
