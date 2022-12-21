
import { query } from '@helper/utils';
import { Control } from '@library/design';
import { openDialog } from '@package/dialog';
import Table, { Column } from '@package/table';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Unit from './Unit';
import Information from './Information';
import Description from './Description';

import { deleteAttributes } from "../../../store/commands";
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
    dispatch(deleteAttributes([uuid], query.toObject(location.search)));
  }

  return (
    <div className={styles['wrapper']}>
      <Table columns={data}>
        <Column title={'Информация'} align={'left'}>
          <Information />
        </Column>
        <Column title={'Размерность'} align={'left'} width={80}>
          <Unit />
        </Column>
        <Column title={'Описание'} align={'left'}>
          <Description />
        </Column>
        <Column align={'right'} width={72}>
          {(props: IAttribute) => (
            <Control
              onEdit={() => handleEdit(props.uuid)}
              onDelete={() => handleDelete(props.uuid)}
              inDeleteProcess={ !!~ inDeleteProcess.indexOf(props.uuid)}
            />
          )}
        </Column>
      </Table>
    </div>
  );
}

export default React.memo(List);