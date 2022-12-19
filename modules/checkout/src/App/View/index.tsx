
import { Header } from '@library/kit';

import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import Controls from './Controls';
import Content from './Content';

import { getOrder } from '../store/commands';
import { resetStateAction, selectData } from '../store/slice';

import styles from './default.module.scss';
import numeral from "@package/numeral";


function Checkout() {
  const params: any = useParams();
  const dispatch = useDispatch();

  const data = useSelector(selectData) as any;

  React.useEffect(() => {
    (async function init(): Promise<void> {
      await dispatch<any>(getOrder(params['uuid']));
    })();
    return () => {
      dispatch(resetStateAction());
    }
  }, []);

  return (
    <div className={styles['wrapper']}>
      {/*<div className={styles['controls']}>*/}
      {/*  <Controls />*/}
      {/*</div>*/}
      <div className={styles['content']}>
        <div className={styles['header']}>
          <Header>Заказ #{ numeral(data?.['externalId']).format('000000') }</Header>
        </div>
        <div className={styles['list']}>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default Checkout;