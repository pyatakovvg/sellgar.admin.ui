
import { Status } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


interface IProps {
  status?: any;
}


function ResulStatus({ status }: IProps) {
  switch(status['code']) {
    case 'bucket': return <Status>{ status['displayName'] }</Status>;

    case 'revision': return <Status mode={'danger'}>{ status['displayName'] }</Status>;
    case 'new': return <Status mode={'danger'}>{ status['displayName'] }</Status>;
    case 'denied': return <Status mode={'danger'}>{ status['displayName'] }</Status>;
    case 'callback': return <Status mode={'danger'}>{ status['displayName'] }</Status>;

    case 'delivered': return <Status mode={'primary'}>{ status['displayName'] }</Status>;
    case 'delivering': return <Status mode={'primary'}>{ status['displayName'] }</Status>;
    case 'delivery': return <Status mode={'primary'}>{ status['displayName'] }</Status>;
    case 'paid': return <Status mode={'primary'}>{ status['displayName'] }</Status>;
    case 'pay': return <Status mode={'primary'}>{ status['displayName'] }</Status>;
    case 'processed': return <Status mode={'primary'}>{ status['displayName'] }</Status>;
    case 'processing': return <Status mode={'primary'}>{ status['displayName'] }</Status>;

    case 'ready': return <Status mode={'success'}>{ status['displayName'] }</Status>;

    default: return <Status>{ status['displayName'] }</Status>;
  }
}


function Statuses({ status }: IProps) {
  return (
    <div className={styles['wrapper']}>
      <ResulStatus status={status} />
    </div>
  );
}

export default Statuses;
