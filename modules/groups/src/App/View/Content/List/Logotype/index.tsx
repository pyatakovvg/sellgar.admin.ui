
import { Image } from "@library/kit";

import React from 'react';

import styles from './default.module.scss';


function Logotype(props: Partial<IGroup>) {
  return (
    <div className={styles['wrapper']}>
      <Image
        width={94}
        height={94}
        src={props?.image?.uuid}
        path={process.env['REACT_APP_GATEWAY_API'] + '/api/v1/images'}
      />
    </div>
  );
}

export default Logotype;