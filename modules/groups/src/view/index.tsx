
import { Header, Button } from '@library/kit';
import Dialog, { openDialog } from '@package/dialog';

import React from 'react';
import { useDispatch } from 'react-redux';

import Modify from './Modify';
import Content from './Content';

import { getGroups, resetStateAction } from '../index';

import styles from './default.module.scss';


function Users(): JSX.Element {
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function init() {
      await dispatch<any>(getGroups());
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
        <Header level={2}>Группа товаров</Header>
      </header>
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