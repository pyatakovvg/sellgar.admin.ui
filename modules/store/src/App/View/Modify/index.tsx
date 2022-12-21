
import { closeDialog } from '@package/dialog';
import { createCancelToken } from '@package/request';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import Form from './Form';
import Loading from './Loading';

import { getProduct, upsertProducts, getCurrencies } from '../../store/commands';
import { loadingProductProcessAction, selectInLoadProcess, selectCurrencies } from '../../store/slice';


interface IProps {
  data?: any;
}


function Modify({ data }: IProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [item, setItem] = React.useState<any>({});

  const currencies = useSelector(selectCurrencies);
  const inLoadProcess = useSelector(selectInLoadProcess);


  React.useEffect(() => {
    const productToken = createCancelToken();

    (async () => {
      dispatch(loadingProductProcessAction(true));
      await dispatch(getCurrencies({ token: productToken.token }));

      if (data) {
        await dispatch(getProduct(data['uuid'], { token: productToken.token }));
        setItem(data);
      }
      dispatch(loadingProductProcessAction(false));
    })();
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

  if ( !! data || inLoadProcess) {
    return (
      <Loading />
    );
  }
  console.log(currencies?.[0] ?? null)

  return (
    <Form
      initialValues={{
        count: '1',
        reserve: '0',
        price: '0',
        purchasePrice: '0',
        currency: currencies?.[0] ?? null,
        ...item,
      }}
      onSubmit={handleSubmit}
    />
  );
}

export default React.memo(Modify);