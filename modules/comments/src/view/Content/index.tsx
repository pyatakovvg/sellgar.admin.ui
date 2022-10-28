
import { Header, Text } from '@library/kit';
import Table, { Column } from '@package/table';
import { nounDeclension } from '@helper/utils';

import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import { selectData, selectMeta } from '../../store/slice';

import cn from "classnames";
import styles from './default.module.scss';


function List() {
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
          <Column title={'Товар'} align={'left'}>
            {(props: any) => (
              <Text>{ props['name'] }</Text>
            )}
          </Column>
          <Column title={'Новых'} width={60}>
            {(props: any) => (
              <Text type={'strong'}>{ props['newCommentCount'] }</Text>
            )}
          </Column>
          <Column title={'Всего'} width={60}>
            {(props: any) => (
              <Text type={'strong'}>{ props['allCommentCount'] }</Text>
            )}
          </Column>
          <Column width={35}>
            {(props: any) => (
              <Link className={iconClassName} to={process.env['PUBLIC_URL'] + '/comments/' + props['uuid']} />
            )}
          </Column>
        </Table>
      </div>
    </div>
  );
}

export default React.memo(List);