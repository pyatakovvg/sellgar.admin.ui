
import { Button, Header } from '@library/kit';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { uploadImages } from '../../store/commands';
import { selectInUploadProcess } from '../../store/slice';

import styles from './default.module.scss';


function HeaderPage() {
  const dispatch = useDispatch();
  const inProcess = useSelector(selectInUploadProcess);

  function handleAdd(event: any) {
    event.preventDefault();

    const fileInput = document.createElement('input');
    fileInput.addEventListener("change", async (e: any) => {
      const fileList = e['target'].files
      await dispatch<any>(uploadImages(fileList));
    }, false);
    fileInput.type = 'file';
    fileInput.multiple = true;
    fileInput.click();
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Header level={2}>Галлерея</Header>
      </div>
      <div className={styles['control']}>
        <Button disabled={inProcess} onClick={handleAdd}>Загрузить</Button>
      </div>
    </div>
  );
}

export default HeaderPage;