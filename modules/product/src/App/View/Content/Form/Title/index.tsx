
import { InputField } from "@library/kit";

import React from 'react';
import { useSelector } from "react-redux";

import ExternalId from './ExternalId';
import { selectInProcess } from "../../../../store/slice";

import styles from './default.module.scss';


function Title() {
  const inProcess = useSelector(selectInProcess);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['fields']}>
          <InputField
            required
            label={'Наименование'}
            name={'name'}
            disabled={inProcess}
          />
        </div>
        <div className={styles['fields']}>
          <ExternalId inProcess={inProcess} />
        </div>
      </div>
    </div>
  );
}

export default Title;
