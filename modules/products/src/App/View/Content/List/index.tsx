
import Table, { Column } from '@package/table';

import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import Name from './Name';
import Price from './Price';
import Image from './Image';
import Category from './Category';
import Controls from './Controls';

import { selectData } from '../../../store/slice';

import cn from "classnames";
import styles from './default.module.scss';


function List() {
  const iconClassName = React.useMemo(() => cn(styles['link'], 'fa-solid fa-ellipsis'), []);

  const data: Array<any> = useSelector(selectData);

  return (
    <Table columns={data}>
      <Column title={'Изображение'} width={110}>
        <Image />
      </Column>
      <Column title={'Название'} align={'left'}>
        <Name />
      </Column>
      <Column title={'Категория'} align={'left'} width={160}>
        <Category />
      </Column>
      <Column title={'Цена'} align={'right'} width={110}>
        <Price />
      </Column>
      <Column align={'right'} width={100}>
        <Controls />
      </Column>
      <Column width={16}>
        {(props: any) => (
          <Link className={iconClassName} to={process.env['PUBLIC_URL'] + '/products/' + props['uuid']} />
        )}
      </Column>
    </Table>
  );
}

export default React.memo(List);