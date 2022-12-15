
import { query } from '@helper/utils';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import Form from './Form';

import { getGroups } from '../../store/commands';

import styles from './default.module.scss';


function Filter() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const params = query.toObject(location['search']);

  React.useEffect(() => {
    dispatch(getGroups());
  }, []);

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