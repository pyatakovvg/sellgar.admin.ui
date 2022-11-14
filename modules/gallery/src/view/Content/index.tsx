
import React from 'react';
import { useSelector } from 'react-redux';

import Images from './Images';
import Folders from './Folders';
import Breadcrumbs from './Breadcrumbs';

import { selectData } from '../../store/slice';

import styles from './default.module.scss';


function Content() {
  const data = useSelector(selectData);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['breadcrumbs']}>
        <Breadcrumbs />
      </div>
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
