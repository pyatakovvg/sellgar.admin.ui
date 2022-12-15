
import { query } from '@helper/utils';
import { closeDialog } from '@package/dialog';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Form from './Form';
import Loading from './Loading';

import { getAttribute, upsertAttributes } from '../../store/commands';
import { selectInProcessOne } from '../../store/slice';


function Modify({ data }: any) {
  const location = useLocation();
  const dispatch = useDispatch();

  const inProcess = useSelector(selectInProcessOne);
  const [brand, setBrand] = React.useState(null);

  React.useEffect(() => {
    async function init() {
      const result = await dispatch(getAttribute(data['uuid']));
      if (result) {
        setBrand(result);
      }
    }
    if ( !! data?.['uuid']) {
      init();
    }
  }, [data]);

  async function handleSave(values: any) {
    const search = query.toObject(location['search']);

    const isSuccess = await dispatch(upsertAttributes(values, search));
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
      initialValues={brand}
      onSubmit={handleSave}
    />
  );
}

export default Modify;