
import { closeDialog } from '@package/dialog';

import React from 'react';
import { useDispatch } from 'react-redux';

import Form from './Form';
import { getCategory, createCategory, updateCategory } from '../../index';

import styles from './default.module.scss';


interface IProps {
  data?: any;
}


function Modify({ data }: IProps): JSX.Element | null {
  const dispatch = useDispatch();

  const [unit, setUnit] = React.useState(null);

  React.useEffect(() => {
    async function init() {
      if (data && ('uuid' in data)) {
        const result = await dispatch<any>(getCategory(data['uuid']));
        setUnit(result);
      }
    }
    init();
  }, []);

  async function handleSubmit(data: any) {
    let result;
    if ('uuid' in data) {
      result = await dispatch<any>(updateCategory(data));
    }
    else {
      result = await dispatch<any>(createCategory(data));
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