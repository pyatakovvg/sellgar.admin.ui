
import { SelectField, Button, InputField } from '@library/kit';

import React from 'react';
import { useSelector } from 'react-redux';

import { selectGroups, selectBrands, selectCategories } from '../../../store/slice';

import styles from './default.module.scss';


function Form({ handleSubmit }: any) {
  const brands = useSelector(selectBrands);
  const groups = useSelector(selectGroups);
  const categories = useSelector(selectCategories);

  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['fields']}>
        <div className={styles['field']}>
          <SelectField
            clearable
            label={'Группа в каталоге'}
            name={'groupUuid'}
            placeholder={'Все группы'}
            options={groups}
            optionKey={'uuid'}
            optionValue={'name'}
          />
        </div>
        <div className={styles['field']}>
          <SelectField
            clearable
            label={'Категория в каталоге'}
            name={'categoryUuid'}
            placeholder={'Все категории'}
            options={categories}
            optionKey={'uuid'}
            optionValue={'name'}
          />
        </div>
        <div className={styles['field']}>
          <SelectField
            clearable
            label={'Производитель'}
            name={'brandUuid'}
            placeholder={'Все производители'}
            options={brands}
            optionKey={'uuid'}
            optionValue={'name'}
          />
        </div>
      </div>
      <div className={styles['fields']}>
        <div className={styles['field']}>
          <InputField name={'search'} placeholder={'Поиск'} />
        </div>
        <div className={styles['control']}>
          <Button type={'submit'}>Применить</Button>
        </div>
      </div>
    </form>
  );
}

export default Form;
