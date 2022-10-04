
import { query } from '@helper/utils';
import { Header, Text, SelectField, Button, InputField, TextareaField, CheckboxField } from '@library/kit';

import React from 'react';
import { change } from 'redux-form';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectUnits, selectCategories, selectInUploadProcess } from '../../../store/slice';

import styles from './@media/index.module.scss';


function Form({ handleSubmit }: any) {
  const location = useLocation();
  const dispatch = useDispatch();

  const units = useSelector(selectUnits);
  const categories = useSelector(selectCategories);
  const inProcess = useSelector(selectInUploadProcess);

  React.useEffect(() => {
    const search = query.toObject(location['search']);

    if (search['unitUuid']) {
      dispatch(change('modify', 'unit.uuid', search['unitUuid']));
    }
    if (search['categoryUuid']) {
      dispatch(change('modify', 'category.uuid', search['categoryUuid']));
    }
  }, []);

  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['header']}>
        <Header level={3}>Аттрибут товара</Header>
      </div>
      <div className={styles['content']}>
        <div className={styles['field']}>
          <SelectField
            label={'Категория товара'}
            name={'category.uuid'}
            options={categories}
            optionKey={'uuid'}
            optionValue={'name'}
            disabled={inProcess}
          />
        </div>
        <div className={styles['field']}>
          <InputField label={'Код'} name={'code'} disabled={inProcess} />
        </div>
        <div className={styles['field']}>
          <InputField label={'Наименование'} name={'name'} disabled={inProcess} />
        </div>
        <div className={styles['field']}>
          <SelectField
            label={'Единица измерения'}
            name={'unit.uuid'}
            options={units}
            optionKey={'uuid'}
            optionValue={'name'}
            disabled={inProcess}
          />
        </div>
        <div className={styles['field']}>
          <TextareaField label={'Описание'} name={'description'} disabled={inProcess} />
        </div>
        <div className={styles['field']}>
          <CheckboxField name={'isFiltered'} disabled={inProcess}>
            <Text>учитывать при фильтрации</Text>
          </CheckboxField>
        </div>
      </div>
      <div className={styles['control']}>
        <Button type={'submit'} mode={'success'} disabled={inProcess}>Применить</Button>
      </div>
    </form>
  );
}

export default Form;
