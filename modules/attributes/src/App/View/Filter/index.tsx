
import { query } from '@helper/utils';

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Form from './Form';

import styles from './default.module.scss';


function Filter() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = query.toObject(location['search']);

  function handleSubmit(data: any) {
    navigate(query.toQuery(data));
  }

  return (
    <div className={styles['wrapper']}>
      <Form
        initialValues={params}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Filter;