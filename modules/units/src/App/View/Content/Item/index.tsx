
import { openDialog } from '@package/dialog';

import { Header, Text } from '@library/kit';

import React from 'react';
import { useDispatch } from 'react-redux';

import Control from './Control';
import { deleteUnits } from '../../../store/commands';

import styles from './@media/index.module.scss';


interface IProps {
  uuid: string;
  name: string;
  description: string;
}


function Item(props: IProps) {
  const dispatch = useDispatch();

  function handleEdit() {
    dispatch(openDialog('modify', { uuid: props['uuid'] }));
  }

  function handleDelete() {
    dispatch(deleteUnits([props['uuid']]));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['fields']}>
          <div className={styles['name']}>
            <Header level={3}>{ props['name'] }</Header>
          </div>
          <div className={styles['description']}>
            <Text type={'strong'}>{ props['description'] || 'не указано' }</Text>
          </div>
        </div>
      </div>
      <div className={styles['control']}>
        <Control
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default Item;