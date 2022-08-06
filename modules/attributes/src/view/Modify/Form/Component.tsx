
import { InputField, TextareaField, SelectField, CheckboxField, Button, Header, Text } from '@library/kit';

import React from 'react';
import { useSelector } from 'react-redux';

import { selectUnits, selectCategories, selectInUploadProcess } from '../../../store/slice';

import styles from './default.module.scss';


function ModifyForm({ handleSubmit, pristine, valid }: any): JSX.Element {
  const units = useSelector(selectUnits);
  const categories = useSelector(selectCategories);
  const inProcess = useSelector(selectInUploadProcess);

  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['header']}>
        <Header level={4}>Атрибут товара</Header>
      </div>
      <div className={styles['content']}>
        <div className={styles['row']}>
          <InputField label={'Код'} name={'code'} disabled={inProcess} />
        </div>
        <div className={styles['row']}>
          <InputField label={'Наименование'} name={'name'} disabled={inProcess} />
        </div>
        <div className={styles['row']}>
          <SelectField clearable label={'Единица измерения'} name={'unitUuid'} options={units} optionKey={'uuid'} optionValue={'name'} disabled={inProcess} />
        </div>
        <div className={styles['row']}>
          <SelectField clearable label={'Категория'} name={'categoryCode'} options={categories} optionKey={'code'} optionValue={'name'} disabled={inProcess} />
        </div>
        <div className={styles['row']}>
          <TextareaField label={'Описание'} name={'description'} disabled={inProcess} />
        </div>
        <div className={styles['row']}>
          <CheckboxField name={'isFiltered'}>
            <Text>использовать при фильтрации</Text>
          </CheckboxField>
        </div>
      </div>
      <div className={styles['control']}>
        <Button type={'submit'} disabled={pristine || ! valid || inProcess}>Отправить</Button>
      </div>
    </form>
  );
}

export default ModifyForm;
