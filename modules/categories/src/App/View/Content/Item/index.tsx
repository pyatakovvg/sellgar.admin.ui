
import { query } from '@helper/utils';
import { openDialog } from '@package/dialog';

import { Image, Header, Text } from '@library/kit';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Control from './Control';
import { deleteCategories } from '../../../store/commands';

import styles from './@media/index.module.scss';


interface IImage {
  uuid: string;
}

interface IProps {
  uuid: string;
  image: IImage,
  code: string;
  name: string;
  group: any;
  description: string;
}


function Item(props: IProps) {
  const location = useLocation();
  const dispatch = useDispatch();

  function handleEdit() {
    dispatch(openDialog('modify', { uuid: props['uuid'] }));
  }

  function handleDelete() {
    const search = query.toObject(location['search']);

    dispatch(deleteCategories([props['uuid']], search));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['image']}>
          <Image
            width={94}
            height={94}
            src={props?.['image']?.['uuid'] ?? null}
            path={process.env['REACT_APP_GATEWAY_API'] + '/api/v1/images'}
          />
        </div>
        <div className={styles['fields']}>
          <div className={styles['field']}>
            <div className={styles['row']}>
              <Header level={3}>{ props['name'] }</Header>
            </div>
            <div className={styles['row']}>
              <Text>{ props?.['group']?.['name'] }</Text>
            </div>
          </div>
          <div className={styles['field']}>
            <Text>Код:&nbsp;</Text>
            <Text type={'strong'}>{ props['code'] }</Text>
          </div>
          <div className={styles['field']}>
            <Text>Описание:&nbsp;</Text>
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