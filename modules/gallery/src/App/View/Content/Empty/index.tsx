
import { Text } from '@library/kit';
import { query } from '@helper/utils';
import { openDialog } from "@package/dialog";

import React from 'react';
import { useDispatch } from 'react-redux';

import { uploadImages } from "../../../store/commands";

import styles from './default.module.scss';


function Empty() {
  const dispatch = useDispatch();

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
      <Text type={'strong'}>Нет данных для отображения</Text>
      <Text>
        <span className={styles['link']} onClick={handleCreateFolder}>Добавьте каталог</span>
        &nbsp;или&nbsp;
        <span className={styles['link']} onClick={handleAdd}>загрузите</span>&nbsp;
        изображения</Text>
    </div>
  );
}

export default React.memo(Empty);