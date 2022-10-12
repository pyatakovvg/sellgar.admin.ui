
import { Text } from '@library/kit';
import moment from '@package/moment';

import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


function Message({ status, message, createdAt }: any) {
  const statusClassName = React.useMemo(() => cn(styles['status'], {
    [styles['is-new']]: (status['code'] ===  'new'),
  }), [status]);

  return (
    <div className={styles['wrapper']}>
      <span className={statusClassName} />
      <div className={styles['content']}>
        <Text>{ message }</Text>
        <Text>{ moment(createdAt).format('DD.MM.YYYY HH:mm') }</Text>
      </div>
    </div>
  );
}

export default Message;