
import { Header, Text } from '@library/kit';
import Table, { Column } from '@package/table';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from '../store/commands';
import { resetStateAction, selectData } from '../store/slice';

import styles from './default.module.scss';


function Users() {
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  React.useEffect(() => {
    async function init() {
      await dispatch<any>(getUsers());
    }
    init();
    return () => {
      dispatch(resetStateAction());
    }
  }, []);

  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Header level={2}>Пользователи</Header>
      </header>
      <section className={styles['content']}>
        <Table columns={data}>
          <Column title={'ID'} align={'left'}>
            {({ uuid }: any) => <Text>{ uuid }</Text>}
          </Column>
          <Column title={'Name'}>
            {({ login }: any) => <Text>{ login }</Text>}
          </Column>
        </Table>
      </section>
    </section>
  );
}

export default Users;