
import { Paging } from "@library/design";

import React from 'react';
import { useSelector } from 'react-redux';

import Table from './Table';
import { selectMeta } from '../../store/slice';

import styles from "./default.module.scss";


function Content() {
  const meta: any = useSelector(selectMeta);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Table />
      </div>
      <div className={styles['controls']}>
        <Paging totalRows={meta?.['totalRows'] ?? 0} />
      </div>
    </div>
  );
}

export default React.memo(Content);