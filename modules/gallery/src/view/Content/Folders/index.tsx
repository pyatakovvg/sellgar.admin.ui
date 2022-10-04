
import React from 'react';
import { useSelector } from 'react-redux';

import Folder from './Folder';

import { selectFolders } from '../../../store/slice';

import styles from './default.module.scss';


function Folders() {
  const folders: Array<any> = useSelector(selectFolders);

  if ( ! folders.length) {
    return null;
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        {folders.map((item: any): JSX.Element => (
          <div key={item['uuid']} className={styles['item']}>
            <Folder {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Folders;