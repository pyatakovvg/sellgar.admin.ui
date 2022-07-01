
import Dialog from '@package/dialog';

import React from 'react';
import { useDispatch } from 'react-redux';

import Header from './Header';
import View from './View';
import Content from './Content';

import { getImages, resetStateAction } from '../index';

import styles from './default.module.scss';


function Users(): JSX.Element {
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function init() {
      await dispatch<any>(getImages());
    }
    init();
    return () => {
      dispatch(resetStateAction());
    }
  }, []);

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