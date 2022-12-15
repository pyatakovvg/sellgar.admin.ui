
import { Text } from '@library/kit';
import numeral from '@package/numeral';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  uuid: string;
  externalId: number;
}


function ExternalId({ uuid, externalId }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['field']}>
        <Text type={'strong'}>№{ numeral(externalId).format('000000') }</Text>
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
