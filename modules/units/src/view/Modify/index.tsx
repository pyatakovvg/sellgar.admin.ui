
import { closeDialog } from '@package/dialog';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from './Form';
import Loading from './Loading';

import { getUnit, upsertUnits } from '../../store/commands';
import { selectInProcessOne } from '../../store/slice';


function Modify({ data }: any) {
  const dispatch = useDispatch();
  const inProcess = useSelector(selectInProcessOne);
  const [unit, setUnit] = React.useState(null);

  React.useEffect(() => {
    async function init() {
      const result = await dispatch(getUnit(data['uuid']));
      if (result) {
        setUnit(result);
      }
    }
    if ( !! data?.['uuid']) {
      init();
    }
  }, [data]);

  async function handleSave(values: any) {
    const isSuccess = await dispatch(upsertUnits(values));
    if (isSuccess) {
      dispatch(closeDialog());
    }
  }

  if ( !! data?.['uuid'] && inProcess) {
    return (
      <Loading />
    );
  }

  return (
    <Form
      initialValues={unit}
      onSubmit={handleSave}
    />
  );
}

export default Modify;