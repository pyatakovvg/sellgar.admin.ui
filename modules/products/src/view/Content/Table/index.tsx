
import { Header } from '@library/kit';
import Table, { Column } from '@package/table';
import { nounDeclension } from '@helper/utils';

import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import Name from './Name';
import Price from './Price';
import Image from './Image';
import Category from './Category';
import Controls from './Controls';

import { selectData, selectMeta } from '../../../store/slice';

import cn from "classnames";
import styles from './default.module.scss';


function Table1() {
  const iconClassName = React.useMemo(() => cn(styles['link'], 'fa-solid fa-ellipsis'), []);

  const meta: any = useSelector(selectMeta);
  const data: Array<any> = useSelector(selectData);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={3}>Найдено { meta['totalRows'] } { nounDeclension(meta['totalRows'], ['товар', 'товара', 'товаров']) }</Header>
      </div>
      <div className={styles['content']}>
        <Table columns={data}>
          <Column title={'Изображение'} width={110}>
            <Image />
          </Column>
          <Column title={'Название'} align={'left'}>
            <Name />
          </Column>
          <Column title={'Категория'} align={'left'}>
            <Category />
          </Column>
          <Column title={'Цена'} align={'right'} width={200}>
            <Price />
          </Column>
          <Column align={'right'} width={140}>
            <Controls />
          </Column>
          <Column width={35}>
            {(props: any) => (
              <Link className={iconClassName} to={process.env['PUBLIC_URL'] + '/products/' + props['uuid']} />
            )}
          </Column>
        </Table>
      </div>
    </div>
  );
}

export default React.memo(Table1);