
import { openDialog } from "@package/dialog";
import { Text, Checkbox } from '@library/kit';

import React from 'react';
import { useDispatch } from 'react-redux';

import cn from 'classnames';
import styles from './default.module.scss';


interface ICategory {
  code: string;
  name: string;
  description: string;
}

interface IUtil {
  uuid: string;
  name: string;
  description: string;
}

interface IProps {
  uuid: string;
  index: number;
  name: string;
  description: string;
  category: ICategory;
  unit: IUtil;
  isFiltered: boolean;
}


function Item({ uuid, name, description, category, unit, isFiltered }: IProps): JSX.Element {
  const dispatch = useDispatch();
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-ellipsis'), []);

  function handleUpdate(uuid: string) {
    dispatch<any>(openDialog('modify', { uuid }));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['name']}>
        <Text type={'strong'}>{ name }</Text>
      </div>
      <div className={styles['unit']}>
        <Text>{ unit ? unit['name'] : '---' }</Text>
      </div>
      <div className={styles['unit']}>
        <Text>{ category ? category['name'] : '---' }</Text>
      </div>
      <div className={styles['description']}>
        <Text type={'description'}>{ description }</Text>
      </div>
      <div className={styles['is-filtered']}>
        <Checkbox value={isFiltered} onChange={() => {}} />
      </div>
      <div className={styles['control']}>
        <span className={iconClassName} onClick={() => handleUpdate(uuid)} />
      </div>
    </div>
  );
}

export default React.memo(Item);