
import { Header } from '@library/kit';
import Table, { Column } from '@package/table';
import { nounDeclension } from '@helper/utils';

import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import Date from './Date';
import Info from './Info';
import Price from './Price';
import Status from './Status';
import ExternalId from './ExternalId';

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
        <Header level={3}>{ nounDeclension(meta['totalRows'], ['Найден', 'Найдено', 'Найдено']) } { meta['totalRows'] } { nounDeclension(meta['totalRows'], ['заказ', 'заказа', 'заказов']) }</Header>
      </div>
      <div className={styles['content']}>
        <Table columns={data}>
          <Column title={'Дата'} align={'left'} width={160}>
            <Date />
          </Column>
          <Column title={'Номер'} align={'left'} width={260}>
            <ExternalId />
          </Column>
          <Column title={'Дополнительно'} align={'left'}>
            <Info />
          </Column>
          <Column title={'Сумма'} align={'right'}>
            <Price />
          </Column>
          <Column title={'Статус'} align={'left'} width={160}>
            <Status />
          </Column>
          <Column width={35}>
            {(props: any) => (
              <Link className={iconClassName} to={process.env['PUBLIC_URL'] + '/checkouts/' + props['uuid']} />
            )}
          </Column>
        </Table>
      </div>
    </div>
  );
}

export default React.memo(Table1);