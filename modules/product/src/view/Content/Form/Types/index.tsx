
import { SelectField } from "@library/kit";
import { selectGroups } from "@package/base-data";

import React from 'react';
import { getFormValues, change } from 'redux-form';
import { useSelector, useDispatch } from "react-redux";

import { getCategories, getAttributes } from '../../../../store/commands';
import { selectCategories, selectInProcess } from "../../../../store/slice";

import styles from './default.module.scss';


function Types() {
  const dispatch = useDispatch();

  const groups = useSelector(selectGroups);
  const categories = useSelector(selectCategories);
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

  React.useEffect(() => {
    async function init() {
      if (values['categoryUuid']) {
        await dispatch<any>(getAttributes(values['categoryUuid']));
      }
    }
    init();
  }, [values['categoryUuid']]);

  function handleResetCategory() {
    dispatch(change('modify', 'categoryUuid', null));
  }

  function handleResetAttributes() {
    dispatch(change('modify', 'attributes', []));
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['fields']}>
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
        <div className={styles['fields']}>
          <SelectField
            required
            simple
            name="categoryUuid"
            label="Категория"
            options={categories}
            optionKey="uuid"
            optionValue="name"
            disabled={inProcess || ! values['groupUuid']}
            onChange={handleResetAttributes}
          />
        </div>
      </div>
    </div>
  );
}

export default Types;
