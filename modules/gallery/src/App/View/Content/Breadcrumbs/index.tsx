
import { Link, Text } from '@library/kit';

import React from 'react';
import { useSelector } from 'react-redux';

import Item from './Item';

import { selectData } from '../../../store/slice';

import cn from 'classnames';
import styles from './default.module.scss';


function Breadcrumbs({}: any) {
  const data = useSelector(selectData);

  const rootClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-house'), []);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['root']}>
        <Link href={process.env['PUBLIC_URL'] + '/gallery'}>
          <span className={rootClassName} />
        </Link>
      </div>
      <div className={styles['item']}>
        {data.parent.map((parent) => {
          return <Item key={parent['uuid']} {...parent} />;
        })}
      </div>
      <div className={styles['folder']}>
        <Text type={'strong'}>{ data?.folder?.name }</Text>
      </div>
    </div>
  );
}

export default Breadcrumbs;