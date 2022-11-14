
import { Text } from '@library/kit';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { deleteFolder } from '../../../../store/commands';

import cn from 'classnames';
import styles from './default.module.scss';


function Folder({ uuid, name }: IFolder) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const folderClassName = React.useMemo(() => cn(styles['icon-folder'], 'fa-solid fa-folder'), []);
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-xmark'), []);

  function handleDelete() {
    dispatch(deleteFolder(uuid));
  }

  async function handleEnter() {
    navigate(process.env['PUBLIC_URL'] + '/gallery/' + uuid)
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']} onClick={handleEnter}>
        <div className={styles['thumb']}>
          <span className={folderClassName} />
        </div>
        <div className={styles['text']}>
          <Text type={'strong'}>{ name }</Text>
        </div>
      </div>
      <div className={styles['control']}>
        <span className={iconClassName} onClick={() => handleDelete()} />
      </div>
    </div>
  );
}

export default Folder;