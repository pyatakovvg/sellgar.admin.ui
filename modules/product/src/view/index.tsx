
import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Content from './Content';

import { getAttributes, getCurrencies, getProduct, getGroups, getCategories, getBrands, resetStateAction } from '../index';

import styles from './default.module.scss';


function Product(): JSX.Element {
  const params: any = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function init() {
      await dispatch<any>(getGroups());
      await dispatch<any>(getBrands());
      await dispatch<any>(getAttributes());
      await dispatch<any>(getCurrencies());
      await dispatch<any>(getCategories());
      await dispatch<any>(getProduct(params['uuid']));
    }
    init();
    return () => {
      dispatch(resetStateAction());
    }
  }, []);

  return (
    <section className={styles['wrapper']}>
      <section className={styles['content']}>
        <Content />
      </section>
    </section>
  );
}

export default Product;