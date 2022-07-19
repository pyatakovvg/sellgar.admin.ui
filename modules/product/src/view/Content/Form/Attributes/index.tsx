
import { Header } from '@library/kit';

import React from 'react';
import { useSelector } from 'react-redux';
import { FieldArray, getFormSyncErrors } from 'redux-form';

import ModeFields from "./ModeFields";

import { selectInProcess } from '../../../../index';

import cn from 'classnames';
import styles from './default.module.scss';


function Modes(): JSX.Element {
  const inProcess = useSelector(selectInProcess);
  const errors: any = useSelector(getFormSyncErrors('modify')) || {};
  const contentClassName = React.useMemo(() => cn(styles['content'], {
    [styles['error']]: typeof errors['attributes'] === 'string',
  }), [errors]);

  return (
    <div className={styles['block']}>
      <div className={styles['header']}>
        <Header level={4}>Свойства</Header>
      </div>
      <div className={contentClassName}>
        <FieldArray
          name="attributes"
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
