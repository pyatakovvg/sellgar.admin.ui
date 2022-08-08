
import { InputField, TextareaField, Button, Header } from '@library/kit';

import React from 'react';
import { useSelector } from 'react-redux';
import { getFormValues } from 'redux-form';

import { selectInUploadProcess } from '../../../index';

import cn from 'classnames';
import styles from './default.module.scss';


function ModifyForm({ handleSubmit, valid, pristine }: any): JSX.Element {
  const values = useSelector(getFormValues('modify'));
  const inProcess = useSelector(selectInUploadProcess);

  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['header']}>
        <Header level={4}>Группа товаров</Header>
      </div>
      <div className={styles['content']}>
        <div className={styles['row']}>
          <InputField label={'Код'} name={'code'} disabled={inProcess} />
        </div>
        <div className={styles['row']}>
          <InputField label={'Наименование'} name={'name'} disabled={inProcess} />
        </div>
        <div className={styles['row']}>
          <TextareaField label={'Описание'} name={'description'} disabled={inProcess} />
        </div>
        <div className={styles['row']}>
          <div className={styles['field']}>
            <div className={styles['input']}>
              <InputField label={'Иконка'} name={'icon'} disabled={inProcess} />
            </div>
            {values['icon'] && (
              <div className={styles['thumb']}>
                <span className={cn(styles['icon'], values['icon'])} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles['control']}>
        <Button type={'submit'} disabled={ ! valid || pristine || inProcess}>Отправить</Button>
      </div>
    </form>
  );
}

export default ModifyForm;
