
import { Image } from '@library/kit';

import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


function AddImageForm({ uuid, new: isNew }: any) {
  const imageClassName = React.useMemo(() => cn(styles['wrapper'], {
    [styles['new']]: !! isNew,
  }), [isNew]);

  return (
    <div className={imageClassName}>
      <div className={styles['image']}>
        <Image src={process.env['REACT_APP_GATEWAY_API'] + '/api/v1/images/' + uuid + '?size=124x124'}/>
      </div>
    </div>
  );
}

export default AddImageForm;
