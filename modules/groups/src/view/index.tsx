
import Dialog from '@package/dialog';

import React from 'react';
import { useDispatch } from 'react-redux';

import Header from './Header';
import Modify from './Modify';
import Content from './Content';

import { getGroups } from '../store/commands';
import { resetStateAction } from '../store/slice';

import styles from './default.module.scss';


function Group() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function init() {
      await dispatch(getGroups());
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
        <div className={styles['list']}>
          <Content />
        </div>
      </section>

      <Dialog name={'modify'}>
        <Modify />
      </Dialog>
    </section>
  );
}

export default Group;