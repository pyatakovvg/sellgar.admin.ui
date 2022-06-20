
import { InputField, TextareaField, Button, Header } from '@library/kit';

import React from 'react';
import { useSelector } from 'react-redux';

import { selectInUploadProcess } from '../../../index';

import styles from './default.module.scss';


function ModifyForm({ handleSubmit, valid, pristine }: any): JSX.Element {
  const inProcess = useSelector(selectInUploadProcess);

  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['header']}>
        <Header level={4}>Производитель</Header>
      </div>
      <div className={styles['content']}>
        <div className={styles['row']}>
          <InputField label={'Наименование'} name={'name'} disabled={inProcess} />
        </div>
        <div className={styles['row']}>
          <InputField label={'Код'} name={'code'} disabled={inProcess} />
        </div>
        <div className={styles['row']}>
          <TextareaField label={'Описание'} name={'description'} disabled={inProcess} />
        </div>
      </div>
      <div className={styles['control']}>
        <Button type={'submit'} disabled={ ! valid || pristine || inProcess}>Отправить</Button>
      </div>
    </form>
  );
}

export default ModifyForm;
