
import { Header, Button } from '@library/kit';
import Dialog, { openDialog } from '@package/dialog';

import React from 'react';
import { useDispatch } from 'react-redux';

import Content from './Content';
import Modify from './Modify';

import { getCategories, resetStateAction } from '../index';

import styles from './default.module.scss';


function Users(): JSX.Element {
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function init() {
      await dispatch<any>(getCategories());
    }
    init();
    return () => {
      dispatch(resetStateAction());
    }
  }, []);

  function handleAdd() {
    dispatch<any>(openDialog('modify'));
  }

  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Header level={2}>Категория товара</Header>
        <Button onClick={handleAdd}>Добавить</Button>
      </header>
      <section className={styles['content']}>
        <Content />
      </section>

      <Dialog name={'modify'}>
        <Modify />
      </Dialog>
    </section>
  );
}

export default Users;