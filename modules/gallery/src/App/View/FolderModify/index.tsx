
import { query } from '@helper/utils';
import { closeDialog } from '@package/dialog';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Form from './Form';

import { createFolder } from '../../store/commands';

import styles from './default.module.scss';


function FolderModify() {
  const location = useLocation();
  const dispatch = useDispatch();

  async function handleCreate(data: IFolder) {
    const search = query.toObject(location.search);
    const isResult = await dispatch(createFolder({
      parentUuid: search?.uuid,
      ...data,
    }));

    if (isResult) {
      dispatch(closeDialog());
    }
  }

  return (
    <div className={styles['wrapper']}>
      <Form
        initialValues={undefined}
        onSubmit={handleCreate}
      />
    </div>
  );
}

export default FolderModify;
