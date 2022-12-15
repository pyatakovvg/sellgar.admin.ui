
import React from 'react';
import { useSelector } from 'react-redux';

import Folder from './Item';

import { selectData } from '../../../store/slice';

import styles from './default.module.scss';


function Folders() {
  const data = useSelector(selectData);

  return (
    <React.Fragment>
      {data['folders'].map((item) => (
        <div key={item['uuid']} className={styles['item']}>
          <Folder {...item} />
        </div>
      ))}
    </React.Fragment>
  );
}

export default Folders;