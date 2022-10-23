
import { Button } from "@library/kit";

import React from 'react';
import { submit } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';

import Form from './Form';
import Header from './Header';
import Paging from './Paging';
import Loading from './Loading';
import { getStore } from '../../store/commands';
import { selectInProcess, selectMeta } from '../../store/slice';

import styles from './@media/index.module.scss';


interface IProps {
  type?: 'multiple' | 'simple';
  value: Array<string> | string;
  onSubmit(data: any): void;
}


function Widget({ type, value, onSubmit }: IProps) {
  const dispatch = useDispatch();

  const meta = useSelector(selectMeta) as any;
  const inProcess = useSelector(selectInProcess) as boolean;
  const [page, setPage] = React.useState<number>(0);

  React.useEffect(() => {
    dispatch<any>(getStore({
      products: value,
      take: 12,
      skip: page * 12,
    }));
  }, [page]);

  function handleSubmit(data: any) {
    onSubmit(data['products']);
  }

  function handleSubmitForm() {
    dispatch(submit('store'));
  }

  if (inProcess) {
    return (
      <Loading />
    );
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header type={type || 'simple'} />
      </div>
      <div className={styles['content']}>
        <Form
          type={type || 'simple'}
          initialValues={{
            products: value,
          }}
          onSubmit={handleSubmit}
        />
      </div>
      {meta?.['totalRows'] > 12 && (
        <div className={styles['paging']}>
          <Paging page={page} totalRows={meta?.['totalRows'] || 0} onChange={(page) => setPage(page)} />
        </div>
      )}
      <div className={styles['control']}>
        <Button mode={'success'} onClick={handleSubmitForm}>Применить</Button>
      </div>
    </div>
  );
}

export default React.memo(Widget);
