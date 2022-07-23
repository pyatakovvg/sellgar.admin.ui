
import { Header, InputField, Button } from "@library/kit";

import React from 'react';
import { change } from 'redux-form';
import { useDispatch } from "react-redux";

import styles from './default.module.scss';


function Common() {
  const dispatch = useDispatch();

  // const inProcess = useSelector(selectInProcess);

  function handleGenerateExternalId() {
    const externalId = Date.now().toString(32);
    dispatch(change('modify', 'externalId', externalId));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={4}>Основные</Header>
      </div>
      <div className={styles['content']}>
        <div className={styles['fields']}>
          <div className={styles['field']}>
            <div className={styles['external-id']}>
              <div className={styles['input']}>
                <InputField
                  required
                  name="externalId"
                  label="Номер товара/URL наименование"
                  maxLength={64}
                />
              </div>
              <div className={styles['button']}>
                <Button mode={'success'} onClick={handleGenerateExternalId}>Сгенерировать</Button>
              </div>
            </div>
          </div>
          <div className={styles['field']} />
        </div>
        <div className={styles['fields']}>
          <div className={styles['field']}>
            <InputField
              required
              name={'title'}
              label={'Название'}
              maxLength={256}
            />
          </div>
          <div className={styles['field']}>
            <InputField
              name={'originalName'}
              label={'Оригинальное название'}
              maxLength={256}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Common;
