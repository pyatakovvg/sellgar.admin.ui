
import { Header } from '@library/kit';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Item from './Item';

import { getUsers, resetStateAction, selectData } from '../index';

import styles from './default.module.scss';


function Users(): JSX.Element {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
console.log(data)
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
        {data.map((item) => (
          <div key={item['uuid']} className={styles['item']}>
            <Item index={1} login={item['login']} />
          </div>
        ))}
      </section>
    </section>
  );
}

export default Users;