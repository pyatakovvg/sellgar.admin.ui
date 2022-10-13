
import { Text, Image } from '@library/kit';
import { toBiteSize } from '@helper/utils';
import { openDialog } from '@package/dialog';

import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteImages } from '../../../../index';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  uuid: string;
  name: string;
  size: number;
  width: number;
  height: number;
}


function Item({ uuid, name, size, width, height }: IProps): JSX.Element {
  const dispatch = useDispatch();
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-trash'), []);

  function handleView() {
    dispatch<any>(openDialog('view', { uuid, name }));
  }

  function handleDelete(uuid: string) {
    dispatch<any>(deleteImages(uuid));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['image']} onClick={handleView}>
        <Image width={124} height={124} src={process.env['REACT_APP_GATEWAY_API'] + '/api/v1/images/' + uuid} />
      </div>
      <div className={styles['description']}>
        <div className={styles['name']}>
          <Text type={'description'}>{ name }</Text>
        </div>
        <div className={styles['size']}>
          <Text type={'description'}><b>{ toBiteSize(size) }</b></Text>
        </div>
        <div className={styles['size']}>
          <Text type={'description'}><b>{ width }x{ height } px</b></Text>
        </div>
      </div>
      <div className={styles['control']}>
        <span className={iconClassName} onClick={() => handleDelete(uuid)} />
      </div>
    </div>
  );
}

export default Item;