
import { query } from '@helper/utils';
import { Header, Button } from '@library/kit';
import Dialog, { openDialog } from '@package/dialog';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Filter from './Filter';
import Modify from './Modify';
import Content from './Content';

import { getAttributes, getCategories, resetStateAction } from '../index';

import styles from './default.module.scss';


function Users(): JSX.Element {
  const dispatch = useDispatch();
  const location = useLocation();

  React.useEffect(() => {
    const params = query.toObject(location['search']);

    async function init() {
      await dispatch<any>(getCategories());
      await dispatch<any>(getAttributes(params));
    }
    init();
    return () => {
      dispatch(resetStateAction());
    }
  }, [location]);

  function handleAdd() {
    dispatch<any>(openDialog('modify'));
  }

  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Header level={2}>Атрибуты</Header>
      </header>
      <aside className={styles['filter']}>
        <Filter />
      </aside>
      <section className={styles['content']}>
        <div className={styles['list']}>
          <Content />
        </div>
        <div className={styles['controls']}>
          <Button onClick={handleAdd}>Добавить</Button>
        </div>
      </section>

      <Dialog name={'modify'}>
        <Modify />
      </Dialog>
    </section>
  );
}

export default Users;