
import { Button, InputField } from "@library/kit";

import React from 'react';
import { change } from 'redux-form';
import { useDispatch } from 'react-redux';

import styles from './default.module.scss';


interface IProps {
  inProcess: boolean;
}


function ExternalId({ inProcess }: IProps) {
  const dispatch = useDispatch();

  function handleGenerateExternalId() {
    const externalId = Date.now().toString(32);
    dispatch(change('modify', 'externalId', externalId));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['price']}>
        <InputField
          label={'Артикул'}
          name={'externalId'}
          disabled={inProcess}
        />
      </div>
      <div className={styles['button']}>
        <Button mode={'success'} onClick={handleGenerateExternalId}>Ген.</Button>
      </div>
    </div>
  );
}

export default ExternalId;
