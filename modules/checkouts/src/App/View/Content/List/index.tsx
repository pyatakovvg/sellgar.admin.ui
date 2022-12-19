
import Table, { Column } from '@package/table';

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


function List() {
  const iconClassName = React.useMemo(() => cn(styles['link'], 'fa-solid fa-ellipsis'), []);

  const data: Array<any> = useSelector(selectData);

  return (
    <Table columns={data}>
      <Column title={'Дата'} align={'left'} width={120}>
        <Date />
      </Column>
      <Column title={'Номер'} align={'left'} width={80}>
        <ExternalId />
      </Column>
      <Column title={'Дополнительно'} align={'left'}>
        <Info />
      </Column>
      <Column title={'Сумма'} align={'right'}>
        <Price />
      </Column>
      <Column title={'Статус'} align={'left'} width={80}>
        <Status />
      </Column>
      <Column width={16}>
        {(props: any) => (
          <Link className={iconClassName} to={process.env['PUBLIC_URL'] + '/checkouts/' + props['uuid']} />
        )}
      </Column>
    </Table>
  );
}

export default List;