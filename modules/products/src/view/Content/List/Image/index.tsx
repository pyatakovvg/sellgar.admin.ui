
import { Image } from "@library/kit";

import React from 'react';

import styles from "./default.module.scss";


interface IProps {
  images?: Array<any>;
}


function Gallery({ images }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <Image
        width={94}
        height={94}
        path={process.env['REACT_APP_GATEWAY_API'] + '/api/v1/images'}
        src={images?.[0]?.['uuid'] || null}
      />
    </div>
  );
}

export default Gallery;
