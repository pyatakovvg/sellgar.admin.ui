
import { query } from '@helper/utils';
import { ImageField } from '@widget/gallery';
import { Header, Button, SelectField, InputField, TextareaField } from '@library/kit';

import React from 'react';
import { change } from 'redux-form';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


import { selectGroups, selectInUploadProcess } from '../../../store/slice';

import styles from './@media/index.module.scss';


function Form({ handleSubmit }: any) {
  const dispatch = useDispatch();
  const location = useLocation();

  const groups = useSelector(selectGroups);
  const inProcess = useSelector(selectInUploadProcess);

  React.useEffect(() => {
    const search = query.toObject(location['search']);

    if (search['groupUuid']) {
      dispatch(change('modify', 'group.uuid', search['groupUuid']));
    }
  }, [location]);

  return (
    <form className={styles['wrapper']} onSubmit={handleSubmit}>
      <div className={styles['header']}>
        <Header level={3}>Категория товара</Header>
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
          <SelectField
            label={'Группа товара'}
            name={'group.uuid'}
            disabled={inProcess}
            options={groups}
            optionKey={'uuid'}
            optionValue={'name'}
          />
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
