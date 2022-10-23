
import { SelectField, CheckboxField, Button, Text } from '@library/kit';

import React from 'react';

import styles from './default.module.scss';


function Form({ handleSubmit }: any) {
  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['fields']}>
        <div className={styles['field']}>
          <SelectField
            clearable
            label={'Группа'}
            name={'groupUuid'}
            placeholder={'Все группы'}
            options={[]}
            optionKey={'uuid'}
            optionValue={'name'}
          />
        </div>
        <div className={styles['field']}>
          <SelectField
            clearable
            label={'Категория'}
            name={'categoryUuid'}
            placeholder={'Все категории'}
            options={[]}
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
            options={[]}
            optionKey={'uuid'}
            optionValue={'name'}
          />
        </div>
        <div className={styles['check']}>
          <CheckboxField name={'isUse'}><Text>на витрине</Text></CheckboxField>
        </div>
      </div>
      <div className={styles['control']}>
        <Button type={'submit'}>Применить</Button>
      </div>
    </form>
  );
}

export default Form;
