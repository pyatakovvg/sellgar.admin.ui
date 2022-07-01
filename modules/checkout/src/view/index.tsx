
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Content from './Content';

import { getOrder, resetStateAction, selectData } from '../index';

import styles from './default.module.scss';


function Products(): JSX.Element | null {
  const params: any = useParams();
  const dispatch = useDispatch();

  const data: any = useSelector(selectData);

  React.useEffect(() => {
    async function init() {
      await dispatch<any>(getOrder(params['uuid']));
    }
    init();
    return () => {
      dispatch(resetStateAction());
    }
  }, []);

  if ( ! data) {
    return null;
  }

  return (
    <section className={styles['wrapper']}>
      <section className={styles['content']}>
        <Content />
      </section>
    </section>
  );
}

export default Products;