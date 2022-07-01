
import React from 'react';
import { useSelector } from 'react-redux';

import Common from './Common';
import Customer from './Customer';
import Information from './Information';
import Products from './Products';
import Description from './Description';

import { selectData } from '../../index';

import styles from './default.module.scss';


function Content(): JSX.Element {
  const data: any = useSelector(selectData);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['block']}>
        <Common {...data} />
      </div>
      <div className={styles['block']}>
        <Customer {...data} />
      </div>
      <div className={styles['block']}>
        <Information {...data} />
      </div>
      { !! data['products'].length && (
        <div className={styles['block']}>
          <Products {...data} />
        </div>
      )}
      {data['description'] && (
        <div className={styles['block']}>
          <Description {...data} />
        </div>
      )}
    </div>
  );
}

export default Content;