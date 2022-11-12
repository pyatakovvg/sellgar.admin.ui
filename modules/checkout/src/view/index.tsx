
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from './Header';
import Content from './Content';

import { getOrder, resetStateAction, selectData } from '../index';

import styles from './default.module.scss';


function Checkout() {
  const params: any = useParams();
  const dispatch = useDispatch();

  const data: any = useSelector(selectData);

  React.useEffect(() => {
    async function init(): Promise<void> {
      await dispatch<any>(getOrder(params['uuid']));
    }
    init().then(() => {});
    return () => {
      dispatch(resetStateAction());
    }
  }, []);

  if ( ! data) {
    return null;
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header />
      </div>
      <div className={styles['content']}>
        <Content />
      </div>
    </div>
  );
}

export default Checkout;