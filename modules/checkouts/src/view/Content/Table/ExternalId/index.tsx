
import { Text } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  uuid?: string;
  externalId?: string;
}


function ExternalId({ uuid, externalId }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['field']}>
        <Text type={'strong'}>{ externalId }</Text>
      </div>
      <div className={styles['field']}>
        <Text type={'description'}>{ uuid }</Text>
      </div>
    </div>
  );
}

ExternalId.defaultProps = {
  uuid: '---',
  externalId: '---',
};

export default ExternalId;
