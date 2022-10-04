
import Gallery, { closeGallery } from "@widget/gallery";

import React from 'react';
import { useParams } from 'react-router-dom';
import { getFormValues, change } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';

import Header from './Header';
import Content from './Content';

import { getCurrencies, getProduct, getGroups, getBrands, resetStateAction } from '../index';

import styles from './default.module.scss';


function Product() {
  const params: any = useParams();
  const dispatch = useDispatch();
  const values = useSelector(getFormValues('modify')) as any;

  React.useEffect(() => {
    async function init() {
      await dispatch<any>(getGroups());
      await dispatch<any>(getBrands());
      await dispatch<any>(getCurrencies());
      await dispatch<any>(getProduct(params['uuid']));
    }
    init();
    return () => {
      dispatch(resetStateAction());
    }
  }, []);

  function handleImageChange(data: Array<any>) {
    dispatch(change('modify', 'images', data));
    dispatch(closeGallery());
  }

  return (
    <section className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header />
      </div>
      <section className={styles['content']}>
        <Content />
      </section>

      <Gallery name={'gallery'} type={'multiple'} value={values?.['images'] ?? []} onSubmit={handleImageChange} />

    </section>
  );
}

export default Product;