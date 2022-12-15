
import { closeDialog } from '@package/dialog';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from './Form';
import Loading from './Loading';

import { selectInProcessOne } from '../../store/slice';
import { getGroup, upsertGroups } from '../../store/commands';


function Modify({ data }: any) {
  const dispatch = useDispatch();
  const inProcess = useSelector(selectInProcessOne);
  const [group, setGroup] = React.useState(null);

  React.useEffect(() => {
    async function init() {
      const result = await dispatch(getGroup(data['uuid']));
      if (result) {
        setGroup(result);
      }
    }
    if ( !! data?.['uuid']) {
      init();
    }
  }, [data]);

  async function handleSave(values: any) {
    const isSuccess = await dispatch(upsertGroups(values));
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
      initialValues={group}
      onSubmit={handleSave}
    />
  );
}

export default Modify;