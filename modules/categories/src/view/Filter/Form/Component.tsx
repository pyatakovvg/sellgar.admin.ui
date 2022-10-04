
import { SelectField, Button } from '@library/kit';

import React from 'react';
import { useSelector } from 'react-redux';

import { selectGroups } from '../../../store/slice';

import styles from './default.module.scss';


function FilterForm({ handleSubmit }: any) {
  const groups = useSelector(selectGroups);

  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['content']}>
        <div className={styles['row']}>
          <SelectField
            clearable
            label={'Группа товара'}
            placeholder={'По всем группам'}
            name={'groupUuid'}
            options={groups}
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
