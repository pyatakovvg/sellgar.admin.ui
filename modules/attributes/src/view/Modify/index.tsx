
import { closeDialog } from '@package/dialog';

import React from 'react';
import { useDispatch } from 'react-redux';

import Form from './Form';
import { getUnits, getAttribute, createAttribute, updateAttribute } from '../../index';

import styles from './default.module.scss';


interface IProps {
  data?: any;
}


function Modify({ data }: IProps): JSX.Element | null {
  const dispatch = useDispatch();

  const [unit, setUnit] = React.useState(null);

  React.useEffect(() => {
    async function init() {
      await dispatch<any>(getUnits());
      if (data && ('uuid' in data)) {
        const result = await dispatch<any>(getAttribute(data['uuid']));
        setUnit(result);
      }
    }
    init();
  }, []);

  async function handleSubmit(data: any) {
    let result;

    if (data && data['uuid']) {
      result = await dispatch<any>(updateAttribute(data));
    }
    else {
      result = await dispatch<any>(createAttribute(data));
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
        initialValues={{
          uuid: unit?.['uuid'] || undefined,
          name: unit?.['name'] || undefined,
          description: unit?.['description'] || undefined,
          unitUuid: unit?.['unit']?.['uuid'] || null,
          order: unit?.['order'] || 0,
          isFiltered: unit?.['isFiltered'] || false,
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Modify;