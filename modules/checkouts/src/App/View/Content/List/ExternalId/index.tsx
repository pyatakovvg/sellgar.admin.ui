
import { Text } from '@library/kit';
import numeral from '@package/numeral';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  externalId: number;
}


function ExternalId({ externalId }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <Text type={'strong'}>№{ numeral(externalId).format('000000') }</Text>
    </div>
  );
}

ExternalId.defaultProps = {
  externalId: '---',
};

export default ExternalId;
