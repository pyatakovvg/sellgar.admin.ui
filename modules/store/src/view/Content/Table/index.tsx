
import { openDialog } from '@package/dialog';
import Table, { Column } from '@package/table';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Name from './Name';
import Price from './Price';
import Count from './Count';
import Vendor from './Vendor';

import { selectData, selectMeta } from '../../../store/slice';

import cn from "classnames";
import styles from './default.module.scss';


function Table1() {
  const dispatch = useDispatch();
  const iconClassName = React.useMemo(() => cn(styles['link'], 'fa-solid fa-ellipsis'), []);

  const data: Array<any> = useSelector(selectData);

  return (
    <div className={styles['wrapper']}>
      <Table columns={data}>
        <Column title={'Наименование'} align={'left'}>
          <Name />
        </Column>
        <Column title={'Код'} align={'left'}>
          <Vendor />
        </Column>
        <Column title={'Цена'} align={'right'}>
          <Price />
        </Column>
        <Column title={'Наличие'} align={'right'}>
          <Count />
        </Column>
        <Column width={24}>
          {(props: any) => (
            <span className={iconClassName} onClick={() => dispatch(openDialog('modify', { uuid: props['uuid'] }))} />
          )}
        </Column>
      </Table>
    </div>
  );
}

export default React.memo(Table1);