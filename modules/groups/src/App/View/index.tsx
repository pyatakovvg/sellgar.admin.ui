
import Dialog from '@package/dialog';
import { Header } from '@library/kit';
import { query } from '@helper/utils';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Controls from './Controls';
import Modify from './Modify';
import Content from './Content';

import { getGroups } from '../store/commands';
import { resetStateAction } from '../store/slice';

import styles from './default.module.scss';


function Group() {
  const location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    (async function init() {
      await dispatch(getGroups(query.toObject(location.search)));
    })();
    return () => {
      dispatch(resetStateAction());
    }
  }, []);

  return (
    <section className={styles['wrapper']}>
      <div className={styles['controls']}>
        <Controls />
      </div>
      <section className={styles['content']}>
        <header className={styles['header']}>
          <Header>Группа товара</Header>
        </header>
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