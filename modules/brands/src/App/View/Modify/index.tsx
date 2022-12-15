
import { query } from '@helper/utils';
import { closeDialog } from '@package/dialog';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Form from './Form';
import Loading from './Loading';

import { selectInProcessOne } from '../../store/slice';
import { getBrand, upsertBrands } from '../../store/commands';


function Modify({ data }: any) {
  const location = useLocation();
  const dispatch = useDispatch();

  const inProcess = useSelector(selectInProcessOne);

  const [brand, setBrand] = React.useState(null);


  React.useEffect(() => {
    if ( !! data?.uuid) {
      (async function init(uuid: string) {
        const result = await dispatch(getBrand(uuid));
        if (result) {
          setBrand(result);
        }
      })(data.uuid);
    }
  }, [data]);

  async function handleSave(values: IBrand) {
    const isSuccess = await dispatch(upsertBrands(values, query.toObject(location.search)));
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