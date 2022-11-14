
import { Image, Text } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  data: IImage;
}


function ImageView({ data }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Text>{ data['name'] }</Text>
      </div>
      <div className={styles['content']}>
        <Image width={600} height={600} src={process.env['REACT_APP_GATEWAY_API'] + '/api/v1/images/' + data['uuid']} />
      </div>
    </div>
  );
}

export default ImageView;