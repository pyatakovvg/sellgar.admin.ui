
import { Text } from '@library/kit';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  uuid: string;
  name: string;
  foldersCount: number;
  imagesCount: number;
}


function Folder({ uuid, name, foldersCount, imagesCount }: IProps): JSX.Element {
  const navigate = useNavigate();

  const folderClassName = React.useMemo(() => cn(styles['icon-folder'], 'fa-solid fa-folder'), []);
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-trash'), []);

  function handleDelete() {

  }

  async function handleEnter() {
    navigate(process.env['PUBLIC_URL'] + '/gallery/' + uuid)
  }

  return (
    <div className={styles['wrapper']} onClick={handleEnter}>
      <div className={styles['thumb']}>
        <span className={folderClassName} />
        <span>{ foldersCount }</span>
        <span>{ imagesCount }</span>
      </div>
      <div className={styles['content']}>
        <Text>{ name }</Text>
      </div>
      <div className={styles['control']}>
        <span className={iconClassName} onClick={() => handleDelete(uuid)} />
      </div>
    </div>
  );
}

export default Folder;