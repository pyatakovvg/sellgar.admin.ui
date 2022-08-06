
import { closeDialog } from '@package/dialog';

import React from 'react';
import { useDispatch } from 'react-redux';

import Form from './Form';
import { getBrand, createBrand, updateBrand } from '../../store/commands';

import styles from './default.module.scss';


interface IProps {
  data?: any;
}


function Modify({ data }: IProps) {
  const dispatch = useDispatch();

  const [unit, setUnit] = React.useState(null);

  React.useEffect(() => {
    async function init() {
      if (data && ('code' in data)) {
        const result = await dispatch<any>(getBrand(data['code']));
        setUnit(result);
      }
    }
    init();
  }, []);

  async function handleSubmit(data: any) {
    let result;
    if ('code' in data) {
      result = await dispatch<any>(updateBrand(data));
    }
    else {
      result = await dispatch<any>(createBrand(data));
    }
    if (result) {
      dispatch<any>(closeDialog());
    }
  }

  if (data && ! unit) {
    return null;
  }

  return (
    <div className={styles['wrapper']}>
      <Form
        initialValues={{ ...unit || {} }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Modify;