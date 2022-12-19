
import { query } from '@helper/utils';
import { openDialog } from '@package/dialog';
import { Button, Header } from '@library/kit';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { uploadImages } from '../../store/commands';
import { selectInUploadProcess } from '../../store/slice';

import styles from './default.module.scss';


function HeaderPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const inProcess = useSelector(selectInUploadProcess);

  function handleAdd(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const fileInput = document.createElement('input');

    fileInput.addEventListener("change", (e: any) => {
      const fileList = e.target.files;
      const search = query.toObject(location.search);
      dispatch(uploadImages(fileList, search?.uuid));
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
      <div className={styles['control']}>
        <Button disabled={inProcess} onClick={handleCreateFolder}>Добавить каталог</Button>
      </div>
      <div className={styles['control']}>
        <Button mode={'success'} disabled={inProcess} onClick={handleAdd}>Загрузить</Button>
      </div>
    </div>
  );
}

export default HeaderPage;