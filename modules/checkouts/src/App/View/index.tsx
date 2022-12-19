
import { query } from '@helper/utils';
import { Header } from '@library/kit';
import { createCancelToken } from '@package/request';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Controls from './Controls';
import Filter from './Filter';
import Content from './Content';

import { resetStateAction } from '../store/slice';
import { getOrders, getStatuses, getDelivery, getPayments } from '../store/commands';

import styles from './default.module.scss';


function Checkouts() {
  const location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const cancelStatuses = createCancelToken();
    const cancelDelivery = createCancelToken();
    const cancelPayments = createCancelToken();

    dispatch(getStatuses({ token: cancelStatuses.token }));
    dispatch(getDelivery({ token: cancelDelivery.token }));
    dispatch(getPayments({ token: cancelPayments.token }));

    return () => {
      cancelStatuses.cancel();
      cancelDelivery.cancel();
      cancelPayments.cancel();
      dispatch(resetStateAction());
    }
  }, []);

  React.useEffect(() => {
    const cancelOrders = createCancelToken();
    (async function init() {
      await dispatch<any>(getOrders(query.toObject(location['search']), { token: cancelOrders.token }));
    })();
    return () => {
      cancelOrders.cancel();
    };
  }, [location]);

  return (
    <section className={styles['wrapper']}>
      <div className={styles['controls']}>
        <Controls />
      </div>
      <section className={styles['content']}>
        <header className={styles['header']}>
          <Header>Заказы</Header>
        </header>
        <aside className={styles['filter']}>
          <Filter />
        </aside>
        <div className={styles['list']}>
          <Content />
        </div>
      </section>
    </section>
  );
}

export default Checkouts;