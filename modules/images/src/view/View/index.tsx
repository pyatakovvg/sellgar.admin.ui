
import { Image } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  data?: any;
}


function Item({ data }: IProps): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <Image src={process.env['REACT_APP_GATEWAY_API'] + '/api/v1/images/' + data['uuid'] + '?size=large'} />
    </div>
  );
}

export default Item;