
import {Paging} from "@library/design";

import React from 'react';
import { useSelector } from "react-redux";

import List from './List';
import Header from './Header';

import { selectMeta } from "../../store/slice";

import styles from "./default.module.scss";


function Content() {
  const meta = useSelector(selectMeta);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['header']}>
          <Header />
        </div>
        <div className={styles['list']}>
          <List />
        </div>
      </div>
      { !! meta.totalRows && (
        <div className={styles['controls']}>
          <Paging totalRows={meta.totalRows} />
        </div>
      )}
    </div>
  );
}

export default React.memo(Content);