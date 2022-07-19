
import { selectGroups, selectCategories, selectBrands, selectInProcess } from "../../../../index";

import { Header, SelectField } from "@library/kit";

import React from 'react';
import { getFormValues, change } from 'redux-form';
import { useSelector, useDispatch } from "react-redux";

import { getCategories } from '../../../../store/commands';

import styles from './default.module.scss';


function Types() {
  const dispatch = useDispatch();

  const groups = useSelector(selectGroups);
  const categories = useSelector(selectCategories);
  const brands = useSelector(selectBrands);
  const inProcess = useSelector(selectInProcess);

  const values = useSelector(getFormValues('modify')) as any;

  React.useEffect(() => {
    async function init() {
      if (values['groupUuid']) {
        await dispatch<any>(getCategories(values['groupUuid']));
      }
    }
    init();
  }, [values['groupUuid']]);

  function handleResetCategory() {
    dispatch(change('modify', 'categoryUuid', null));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={4}>Классификация</Header>
      </div>
      <div className={styles['content']}>
        <div className={styles['fields']}>
          <div className={styles['field']}>
            <SelectField
              required
              simple
              name="groupUuid"
              label="Группа"
              options={groups}
              optionKey="uuid"
              optionValue="name"
              disabled={inProcess}
              onChange={handleResetCategory}
            />
          </div>
          <div className={styles['field']}>
            <SelectField
              required
              simple
              name="categoryUuid"
              label="Категория"
              options={categories}
              optionKey="uuid"
              optionValue="name"
              disabled={inProcess || ! values['groupUuid']}
            />
          </div>
          <div className={styles['field']}>
            <SelectField
              required
              simple
              name="brandUuid"
              label="Производитель"
              options={brands}
              optionKey="uuid"
              optionValue="name"
              disabled={inProcess}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Types;
