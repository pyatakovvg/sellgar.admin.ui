
import { closeDialog } from '@package/dialog';

import React from 'react';
import { useDispatch } from 'react-redux';

import Form from './Form';
import { getGroup, createGroup, updateGroup } from '../../index';

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
        const result = await dispatch<any>(getGroup(data['code']));
        setUnit(result);
      }
    }
    init();
  }, []);

  async function handleSubmit(data: any) {
    let result;
    if (data['new']) {
      result = await dispatch<any>(createGroup(data));
    }
    else {
      result = await dispatch<any>(updateGroup(data));
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