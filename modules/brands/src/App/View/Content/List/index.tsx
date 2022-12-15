
import { query } from '@helper/utils';
import { Control } from '@library/design';
import { openDialog } from '@package/dialog';
import Table, { Column } from '@package/table';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Logotype from './Logotype';
import Information from './Information';
import Description from './Description';

import { deleteBrands } from "../../../store/commands";
import { selectData, selectInDeleteProcess } from '../../../store/slice';

import styles from './default.module.scss';


function List() {
  const location = useLocation();
  const dispatch = useDispatch();

  const data = useSelector(selectData);
  const inDeleteProcess = useSelector(selectInDeleteProcess);

  function handleEdit(uuid: string) {
    dispatch(openDialog('modify', { uuid }));
  }

  function handleDelete(uuid: string) {
    dispatch(deleteBrands([uuid], query.toObject(location.search)));
  }

  return (
    <div className={styles['wrapper']}>
      <Table columns={data}>
        <Column title={'Лого'} width={94}>
          <Logotype />
        </Column>
        <Column title={'Информация'} align={'left'} width={160}>
          <Information />
        </Column>
        <Column title={'Описание'} align={'left'}>
          <Description />
        </Column>
        <Column align={'right'} width={72}>
          {(props: IBrand) => (
            <Control
              inDeleteProcess={ !!~ inDeleteProcess.indexOf(props.uuid)}
              onEdit={() => handleEdit(props.uuid)}
              onDelete={() => handleDelete(props.uuid)}
            />
          )}
        </Column>
      </Table>
    </div>
  );
}

export default React.memo(List);