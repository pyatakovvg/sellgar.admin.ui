
import { Header } from '@library/kit';
import { openDialog } from '@package/dialog';
import Table, { Column } from '@package/table';
import { nounDeclension } from '@helper/utils';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Name from './Name';
import Date from './Date';
import Price from './Price';
import Count from './Count';
import Vendor from './Vendor';

import { selectData, selectMeta } from '../../../store/slice';

import cn from "classnames";
import styles from './default.module.scss';


function Table1() {
  const dispatch = useDispatch();
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
          <Column title={'Наименование'} align={'left'}>
            <Name />
          </Column>
          <Column title={'Код'} align={'left'}>
            <Vendor />
          </Column>
          <Column title={'Цена'} align={'right'} width={200}>
            <Price />
          </Column>
          <Column title={'Наличие'} align={'right'} width={120}>
            <Count />
          </Column>
          <Column title={'Дата'} align={'left'} width={120}>
            <Date />
          </Column>
          <Column width={35}>
            {(props: any) => (
              <span className={iconClassName} onClick={() => dispatch(openDialog('modify', { uuid: props['uuid'] }))} />
            )}
          </Column>
        </Table>
      </div>
    </div>
  );
}

export default React.memo(Table1);