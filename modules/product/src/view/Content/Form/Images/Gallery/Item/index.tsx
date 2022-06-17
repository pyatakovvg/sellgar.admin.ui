
import { Image, Checkbox } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  uuid: string;
  isSelected: boolean;
  onChange(data: object): void;
}


function Item({ uuid, isSelected, onChange }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['control']}>
        <Checkbox value={isSelected} onChange={() => onChange({ uuid })} />
      </div>
      <div className={styles['image']}>
        <Image src={process.env['REACT_APP_GATEWAY_API'] + '/api/v1/images/' + uuid + '?size=small'} />
      </div>
    </div>
  );
}

export default React.memo(Item);
