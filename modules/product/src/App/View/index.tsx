
import Gallery, { closeGallery } from "@widget/gallery";

import React from 'react';
import { useParams } from 'react-router-dom';
import { getFormValues, change } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';

import Header from './Header';
import Content from './Content';

import { getProduct, getGroups, getAttributes } from '../store/commands';
import { resetStateAction, loadingPageProcessAction } from '../store/slice';

import styles from './default.module.scss';


function Product() {
  const params: any = useParams();
  const dispatch = useDispatch();
  const values = useSelector(getFormValues('modify')) as IProduct;

  React.useEffect(() => {
    (async function init() {
      dispatch(loadingPageProcessAction(true));
      await dispatch(getGroups());
      await dispatch(getAttributes());
      await dispatch(getProduct(params['uuid']));
      dispatch(loadingPageProcessAction(false));
    })();
    return () => {
      dispatch(resetStateAction());
    };
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