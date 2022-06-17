
import { selectGroups, selectCategories, selectBrands, selectInProcess } from "../../../../index";

import { Header, SelectField } from "@library/kit";

import React from 'react';
import { useSelector } from "react-redux";

import styles from './default.module.scss';


function Types() {
  const groups = useSelector(selectGroups);
  const categories = useSelector(selectCategories);
  const brands = useSelector(selectBrands);
  const inProcess = useSelector(selectInProcess);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={4}>Классификация</Header>
      </div>
      <div className={styles['content']}>
        <div className={styles['fields']}>
          <div className={styles['field']}>
            <SelectField
              simple
              name="groupUuid"
              label="Группа"
              options={groups}
              optionKey="uuid"
              optionValue="name"
              disabled={inProcess}
            />
          </div>
          <div className={styles['field']}>
            <SelectField
              simple
              name="categoryUuid"
              label="Категория"
              options={categories}
              optionKey="uuid"
              optionValue="name"
              disabled={inProcess}
            />
          </div>
          <div className={styles['field']}>
            <SelectField
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
