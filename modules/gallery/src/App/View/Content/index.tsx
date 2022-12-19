
import React from 'react';
import { useSelector } from 'react-redux';

import Empty from './Empty';
import Images from './Images';
import Folders from './Folders';
import Breadcrumbs from './Breadcrumbs';

import { selectData, selectInProcess } from '../../store/slice';

import styles from './default.module.scss';


function Content() {
  const data = useSelector(selectData);
  const inProcess = useSelector(selectInProcess);

  return (
    <div className={styles['wrapper']}>
      {( !! data.folder || !! data.parent.length) && (
        <div className={styles['breadcrumbs']}>
          <Breadcrumbs />
        </div>
      )}
      {( ! inProcess && ! data.folders.length && ! data.images.length) && (
        <div className={styles['block']}>
          <Empty />
        </div>
      )}
      { !! data.folders.length && (
        <div className={styles['block']}>
          <Folders />
        </div>
      )}
      { !! data.images.length && (
        <div className={styles['block']}>
          <Images />
        </div>
      )}
    </div>
  );
}

export default React.memo(Content);
