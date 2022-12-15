
import { Header, Button } from '@library/kit';

import React from 'react';
import { useStore } from 'effector-react';

import { usersStore } from '../store/srore';

import styles from './default.module.scss';


function User() {
  const users = useStore(usersStore);

  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Header level={2}>Пользователи</Header>
      </header>
      <section className={styles['content']}>
        {users.map((user) => {
          return (
            <div>{ user['name'] }</div>
          )
        })}
        <Button>click</Button>
      </section>
    </section>
  );
}

export default User;