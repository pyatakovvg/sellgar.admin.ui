
import { Header } from '@library/kit';

import React from 'react';
import { FieldArray } from "redux-form";
import { useSelector } from "react-redux";

import ModeFields from "./ModeFields";

import { selectInProcess } from '../../../../index';

import styles from './default.module.scss';


function Modes() {
  const inProcess = useSelector(selectInProcess);

  return (
    <div className={styles['block']}>
      <div className={styles['header']}>
        <Header level={4}>Комплектация</Header>
      </div>
      <div className={styles['content']}>
        <FieldArray
          name="modes"
          validate={[(value) => ! value]}
          // @ts-ignore
          component={ModeFields}
          disabled={inProcess}
        />
      </div>
    </div>
  );
}

export default Modes;
