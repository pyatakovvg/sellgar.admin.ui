
import { query } from '@helper/utils';

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Form from './Form';

import styles from './default.module.scss';


function Filter() {
  const location = useLocation();
  const navigate = useNavigate();

  const search = React.useMemo(() => {
    return query.toObject(location['search']);
  }, [location]);

  function handleSubmit(data: any) {

    navigate(query.toQuery({
      ...data,
      page: undefined,
    }));
  }

  return (
    <div className={styles['wrapper']}>
      <Form
        initialValues={{
          ...search,
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default React.memo(Filter);