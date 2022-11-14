
import { closeDialog } from '@package/dialog';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Form from './Form';

import { createFolder } from '../../store/commands';

import styles from './default.module.scss';


function FolderModify() {
  const params = useParams();
  const dispatch = useDispatch();

  async function handleCreate(data: IFolder) {
    const isResult = await dispatch(createFolder({
      parentUuid: params?.uuid,
      ...data,
    }));
console.log(isResult)
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
