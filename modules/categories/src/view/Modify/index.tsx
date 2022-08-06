
import { closeDialog } from '@package/dialog';

import React from 'react';
import { useDispatch } from 'react-redux';

import Form from './Form';
import { getCategory, createCategory, updateCategory } from '../../store/commands';

import styles from './default.module.scss';


interface IProps {
  data?: any;
}


function Modify({ data }: IProps) {
  const dispatch = useDispatch();

  const [category, setCategory] = React.useState(null);

  React.useEffect(() => {
    async function init() {
      if (data && ('code' in data)) {
        const result = await dispatch<any>(getCategory(data['code']));
        setCategory(result);
      }
    }
    init();
  }, []);

  async function handleSubmit(data: any) {
    let result;
    if ('code' in data) {
      result = await dispatch<any>(updateCategory(data));
    }
    else {
      result = await dispatch<any>(createCategory(data));
    }
    if (result) {
      dispatch<any>(closeDialog());
    }
  }

  if (data && ! category) {
    return null;
  }

  return (
    <div className={styles['wrapper']}>
      <Form
        initialValues={{ ...category || {} }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Modify;