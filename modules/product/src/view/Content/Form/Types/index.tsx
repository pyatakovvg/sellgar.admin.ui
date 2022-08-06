
import { selectGroups, selectCategories, selectBrands, selectInProcess } from "../../../../index";

import { Header, SelectField } from "@library/kit";

import React from 'react';
import { getFormValues, change } from 'redux-form';
import { useSelector, useDispatch } from "react-redux";

import { getCategories, getAttributes } from '../../../../store/commands';

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
      if (values['groupCode']) {
        await dispatch<any>(getCategories(values['groupCode']));
      }
    }
    init();
  }, [values['groupCode']]);

  React.useEffect(() => {
    async function init() {
      if (values['categoryCode']) {
        await dispatch<any>(getAttributes(values['categoryCode']));
      }
    }
    init();
  }, [values['categoryCode']]);

  function handleResetCategory() {
    dispatch(change('modify', 'categoryCode', null));
  }

  function handleResetAttributes() {
    dispatch(change('modify', 'attributes', []));
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
              name="groupCode"
              label="Группа"
              options={groups}
              optionKey="code"
              optionValue="name"
              disabled={inProcess}
              onChange={handleResetCategory}
            />
          </div>
          <div className={styles['field']}>
            <SelectField
              required
              simple
              name="categoryCode"
              label="Категория"
              options={categories}
              optionKey="code"
              optionValue="name"
              disabled={inProcess || ! values['groupCode']}
              onChange={handleResetAttributes}
            />
          </div>
          <div className={styles['field']}>
            <SelectField
              required
              simple
              name="brandCode"
              label="Производитель"
              options={brands}
              optionKey="code"
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
