
import { Image } from '@library/kit';

import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


function AddImageForm({ uuid, onDelete }: any) {
  const removeClassName = React.useMemo(() => cn(styles['remove'], 'fa-solid fa-xmark'), []);

  return (
    <div className={styles['wrapper']}>
      <span className={removeClassName} onClick={onDelete}/>
      <div className={styles['image']}>
        <Image
          width={124}
          height={124}
          path={process.env['REACT_APP_GATEWAY_API'] + '/api/v1/images'}
          src={uuid}
        />
      </div>
    </div>
  );
}

export default AddImageForm;
