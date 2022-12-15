
import { ImageField } from '@widget/gallery';
import { Header, Button, InputField, TextareaField } from '@library/kit';

import React from 'react';
import { useSelector } from 'react-redux';

import { selectInUploadProcess } from '../../../store/slice';

import styles from './@media/index.module.scss';


function Form({ handleSubmit }: any) {
  const inProcess = useSelector(selectInUploadProcess);

  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['header']}>
        <Header level={3}>Группа товара</Header>
      </div>
      <div className={styles['content']}>
        <div className={styles['field']}>
          <div className={styles['container']}>
            <div className={styles['image']}>
              <ImageField name={'image'} width={124} height={124} disabled={inProcess} />
            </div>
          </div>
        </div>
        <div className={styles['field']}>
          <InputField label={'Код'} name={'code'} disabled={inProcess} />
        </div>
        <div className={styles['field']}>
          <InputField label={'Наименование'} name={'name'} disabled={inProcess} />
        </div>
        <div className={styles['field']}>
          <TextareaField label={'Описание'} name={'description'} disabled={inProcess} />
        </div>
      </div>
      <div className={styles['control']}>
        <Button type={'submit'} mode={'success'} disabled={inProcess}>Применить</Button>
      </div>
    </form>
  );
}

export default Form;
