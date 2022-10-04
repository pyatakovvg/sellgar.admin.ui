
import { SelectField, Button } from '@library/kit';

import React from 'react';
import { useSelector } from 'react-redux';

import { selectCategories, selectUnits } from '../../../store/slice';

import styles from './default.module.scss';


function FilterForm({ handleSubmit }: any) {
  const units = useSelector(selectUnits);
  const categories = useSelector(selectCategories);

  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['content']}>
        <div className={styles['row']}>
          <SelectField
            clearable
            label={'Категория товара'}
            placeholder={'По всем категориям'}
            name={'categoryUuid'}
            options={categories}
            optionKey={'uuid'}
            optionValue={'name'}
          />
        </div>
        <div className={styles['row']}>
          <SelectField
            clearable
            label={'Единица измерения'}
            placeholder={'По всем единицам'}
            name={'unitUuid'}
            options={units}
            optionKey={'uuid'}
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
