
import { openDialog } from '@package/dialog';
import { Text, Image } from '@library/kit';

import React from 'react';
import { useDispatch } from 'react-redux';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  uuid: string;
  name: string;
}


function Item({ uuid, name }: IProps): JSX.Element {
  const dispatch = useDispatch();
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-ellipsis'), []);

  function handleView(uuid: string) {
    dispatch<any>(openDialog('view', { uuid }));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['image']} onClick={() => handleView(uuid)}>
        <Image src={process.env['REACT_APP_GATEWAY_API'] + '/api/v1/images/' + uuid + '?width=124'} />
      </div>
      <div className={styles['description']}>
        <Text>{ name }</Text>
        <Text>{ uuid }</Text>
      </div>
      <div className={styles['control']}>
        <span className={iconClassName} />
      </div>
    </div>
  );
}

export default Item;