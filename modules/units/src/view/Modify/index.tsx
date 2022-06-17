
import { closeDialog } from '@package/dialog';

import React from 'react';
import { useDispatch } from 'react-redux';

import Form from './Form';
import { getUnit, createUnit, updateUnits } from '../../index';

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
        const result = await dispatch<any>(getUnit(data['uuid']));
        setUnit(result);
      }
    }
    init();
  }, []);

  async function handleSubmit(data: any) {
    let result;
    if ('uuid' in data) {
      result = await dispatch<any>(updateUnits(data));
    }
    else {
      result = await dispatch<any>(createUnit(data));
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