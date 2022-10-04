
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
    <div className={styles['wrapper']} onClick={() => onChange({ uuid })}>
      <div className={styles['control']}>
        <Checkbox value={isSelected} onChange={() => {}} />
      </div>
      <div className={styles['image']}>
        <Image
          width={94}
          height={94}
          path={process.env['REACT_APP_GATEWAY_API'] + '/api/v1/images'}
          src={uuid}
        />
      </div>
    </div>
  );
}

export default React.memo(Item);
