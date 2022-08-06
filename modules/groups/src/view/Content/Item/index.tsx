
import { Text } from '@library/kit';
import { openDialog } from "@package/dialog";

import React from 'react';
import { useDispatch } from 'react-redux';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  uuid: string;
  name: string;
  code: string;
  description: string;
  categories?: Array<any>;
  isEdit?: boolean;
}


function Item({ uuid, name, code, description, categories, isEdit = true }: IProps): JSX.Element {
  const dispatch = useDispatch();
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-ellipsis'), []);

  function handleUpdate(uuid: string) {
    dispatch<any>(openDialog('modify', { uuid }));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['name']}>
          <Text type={'strong'}>{ name }</Text>
        </div>
        <div className={styles['code']}>
          <Text>{ code }</Text>
        </div>
        <div className={styles['description']}>
          <Text type={'description'}>{ description }</Text>
        </div>
        {isEdit && (
          <div className={styles['control']}>
          <span className={iconClassName} onClick={() => handleUpdate(uuid)} />
          </div>
        )}
      </div>
      {categories && (
        <div className={styles['category']}>
          {categories.map((item) => (
            <div key={item['code']} className={styles['item']}>
              <Item {...item} isEdit={false} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Item;