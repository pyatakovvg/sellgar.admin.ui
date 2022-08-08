
import { InputField, TextareaField, SelectField, CheckboxField, Button, Header, Text } from '@library/kit';

import React from 'react';
import { useSelector } from 'react-redux';

import { selectCategories } from '../../../store/slice';

import styles from './default.module.scss';


function FilterForm({ handleSubmit }: any) {
  const categories = useSelector(selectCategories);

  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['content']}>
        <div className={styles['row']}>
          <SelectField
            clearable
            label={'Категория'}
            placeholder={'По всем категориям'}
            name={'categoryCode'}
            options={categories}
            optionKey={'code'}
            optionValue={'name'}
          />
        </div>
      </div>
      <div className={styles['control']}>
        <Button type={'submit'}>Применить</Button>
      </div>
    </form>
  );
}

export default FilterForm;
