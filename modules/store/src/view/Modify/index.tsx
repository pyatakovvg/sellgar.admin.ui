
import { closeDialog } from '@package/dialog';
import { createCancelToken } from '@package/request';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import Form from './Form';
import Loading from './Loading';

import { selectInLoadProcess } from '../../store/slice';
import { getProduct, upsertProducts } from '../../store/commands';


interface IProps {
  data?: any;
}


function Modify({ data }: IProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [item, setItem] = React.useState<any>({});

  const inLoadProcess = useSelector(selectInLoadProcess);


  React.useEffect(() => {
    const productToken = createCancelToken();

    if (data) {
      dispatch(getProduct(data['uuid'], { token: productToken.token }))
        .then((data: any) => setItem(data));
    }
    return () => {
      productToken.cancel();
    };
  }, [data]);


  async function handleSubmit(data: any) {
    const isSuccess = await dispatch(upsertProducts(data));
    if (isSuccess) {
      navigate(process.env['PUBLIC_URL'] + '/store' + location['search']);
      dispatch(closeDialog());
    }
  }


  if ( !! data && inLoadProcess) {
    return (
      <Loading />
    );
  }
  return (
    <Form
      initialValues={{
        ...item,
      }}
      onSubmit={handleSubmit}
    />
  );
}

export default React.memo(Modify);