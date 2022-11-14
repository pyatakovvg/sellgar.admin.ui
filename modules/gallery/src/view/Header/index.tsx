
import { Button, Header } from '@library/kit';
import { openDialog } from '@package/dialog';

import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { uploadImages } from '../../store/commands';
import { selectInUploadProcess } from '../../store/slice';

import styles from './default.module.scss';


function HeaderPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const inProcess = useSelector(selectInUploadProcess);

  function handleAdd(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const fileInput = document.createElement('input');

    fileInput.addEventListener("change", (e: any) => {
      const fileList = e.target.files;
      dispatch(uploadImages(fileList, params['uuid'] || null));
    }, false);

    fileInput.type = 'file';
    fileInput.multiple = true;
    fileInput.click();
  }

  function handleCreateFolder() {
    dispatch(openDialog('folder'));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Header level={2}>Галлерея</Header>
      </div>
      <div className={styles['control']}>
        <Button disabled={inProcess} onClick={handleCreateFolder}>Добавить каталог</Button>
        <Button disabled={inProcess} onClick={handleAdd}>Загрузить</Button>
      </div>
    </div>
  );
}

export default HeaderPage;