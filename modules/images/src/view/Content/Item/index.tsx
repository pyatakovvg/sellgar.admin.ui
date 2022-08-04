
import { openDialog } from '@package/dialog';
import { Text, Image } from '@library/kit';

import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteImages } from '../../../index';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  uuid: string;
  name: string;
}


function Item({ uuid, name }: IProps): JSX.Element {
  const dispatch = useDispatch();
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-trash'), []);

  function handleView(uuid: string) {
    dispatch<any>(openDialog('view', { uuid }));
  }

  function handleDelete(uuid: string) {
    dispatch<any>(deleteImages(uuid));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['image']} onClick={() => handleView(uuid)}>
        <Image src={process.env['REACT_APP_GATEWAY_API'] + '/api/v1/images/' + uuid + '?size=124x124'} />
      </div>
      <div className={styles['description']}>
        <Text>{ name }</Text>
        <Text>{ uuid }</Text>
      </div>
      <div className={styles['control']}>
        <span className={iconClassName} onClick={() => handleDelete(uuid)} />
      </div>
    </div>
  );
}

export default Item;