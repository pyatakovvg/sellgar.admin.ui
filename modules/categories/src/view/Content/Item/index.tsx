
import { Text } from '@library/kit';
import { openDialog } from "@package/dialog";

import React from 'react';
import { useDispatch } from 'react-redux';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  name: string;
  code: string;
  description: string;
  group: any;
}


function Item({ name, code, group, description }: IProps): JSX.Element {
  const dispatch = useDispatch();
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-ellipsis'), []);

  function handleUpdate(code: string) {
    dispatch<any>(openDialog('modify', { code }));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['name']}>
        <Text type={'strong'}>{ name }</Text>
      </div>
      <div className={styles['code']}>
        <Text>{ code }</Text>
      </div>
      <div className={styles['group']}>
        <Text>{ group?.['name'] ?? '---' }</Text>
      </div>
      <div className={styles['description']}>
        <Text type={'description'}>{ description }</Text>
      </div>
      <div className={styles['control']}>
        <span className={iconClassName} onClick={() => handleUpdate(code)} />
      </div>
    </div>
  );
}

export default React.memo(Item);