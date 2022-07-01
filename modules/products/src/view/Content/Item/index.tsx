
import moment from '@package/moment';
import {Image, Checkbox, Text} from '@library/kit';

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Common from './Common';
import Modes from './Modes';
import Date from './Date';

import { updateProduct } from '../../../index';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  uuid: string;
  gallery: Array<any>;
  group: any;
  category: any;
  brand: any;
  modes: Array<any>;
  isUse: boolean;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
}


function Item({ uuid, gallery, group, category, brand, modes, isUse, isAvailable, createdAt, updatedAt }: IProps): JSX.Element {
  const dispatch = useDispatch();
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-ellipsis'), []);


  function handleStatusChange(status: boolean) {
    dispatch<any>(updateProduct(uuid, { isUse: status, updatedAt }))
  }

  function handleAvailableChange(status: boolean) {
    dispatch<any>(updateProduct(uuid, { isAvailable: status, updatedAt }))
  }

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
          <div className={styles['date']}>
            <Date createdAt={createdAt} updatedAt={updatedAt} />
          </div>
        </div>
        <div className={styles['modes']}>
          <Modes modes={modes} />
        </div>
        <div className={styles['available']}>
          <div className={styles['row']}>
            <Checkbox value={isUse} onChange={handleStatusChange}>на витрине</Checkbox>
          </div>
          <div className={styles['row']}>
            <Checkbox value={isAvailable} onChange={handleAvailableChange}>в наличии</Checkbox>
          </div>
        </div>
      </div>
      <div className={styles['control']}>
        <Link className={iconClassName} to={process.env['PUBLIC_URL'] + '/products/' + uuid} />
      </div>
    </div>
  );
}

export default Item;