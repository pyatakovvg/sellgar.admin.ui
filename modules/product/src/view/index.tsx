
import { Button } from '@library/kit';

import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isValid, isPristine, submit } from 'redux-form';

import Content from './Content';

import { getCurrencies, getProduct, getGroups, getBrands, resetStateAction } from '../index';

import styles from './default.module.scss';


function Product() {
  const params: any = useParams();
  const dispatch = useDispatch();
  const valid = useSelector(isValid('modify'));
  const pristine = useSelector(isPristine('modify'));

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

  function handleSubmit() {
    dispatch(submit('modify'));
  }

  return (
    <section className={styles['wrapper']}>
      <div className={styles['controls']}>
        <Button type={'submit'} onClick={handleSubmit} disabled={ ! valid || pristine}>Отправить</Button>
      </div>
      <section className={styles['content']}>
        <Content />
      </section>
    </section>
  );
}

export default Product;