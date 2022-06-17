
import { Image } from '@library/kit';

import React from 'react';
import { Link } from 'react-router-dom';

import Common from './Common';
import Modes from './Modes';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  uuid: string;
  gallery: Array<any>;
  group: any;
  category: any;
  brand: any;
  modes: Array<any>;
}


function Item({ uuid, gallery, group, category, brand, modes }: IProps): JSX.Element {
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-ellipsis'), []);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['image']}>
          {gallery?.[0]
            ? (
              <Image src={process.env['REACT_APP_GATEWAY_API'] + '/api/v1/images/' + gallery[0]['uuid'] + '?size=small'} />
            )
           : (
             <span className={styles['no-image']}>
               <span className={cn(styles['icon'], "fa-solid fa-image")} />
             </span>
            )}
        </div>
        <div className={styles['common']}>
          <Common group={group} category={category} brand={brand} />
        </div>
        <div className={styles['modes']}>
          <Modes modes={modes} />
        </div>
      </div>
      <div className={styles['control']}>
        <Link className={iconClassName} to={process.env['PUBLIC_URL'] + '/products/' + uuid} />
      </div>
    </div>
  );
}

export default Item;