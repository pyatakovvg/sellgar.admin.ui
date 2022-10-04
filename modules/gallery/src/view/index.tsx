
import Dialog from '@package/dialog';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Header from './Header';
import View from './View';
import Content from './Content';

import { getImages, getFolders, resetStateAction } from '../index';

import styles from './default.module.scss';


function Users(): JSX.Element {
  const dispatch = useDispatch();
  const params = useParams();

  React.useEffect(() => {
    async function init() {
      await dispatch<any>(getFolders(params['uuid']));
      await dispatch<any>(getImages(params['uuid']));
    }
    init();
    return () => {
      dispatch(resetStateAction());
    }
  }, [params]);

  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Header />
      </header>
      <section className={styles['content']}>
        <Content />
      </section>

      <Dialog name={'view'}>
        <View />
      </Dialog>
    </section>
  );
}

export default Users;