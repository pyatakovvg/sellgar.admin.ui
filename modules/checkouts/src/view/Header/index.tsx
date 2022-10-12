
import { Header, Button } from '@library/kit';

import React from 'react';
import { useSelector } from 'react-redux';

import { selectInProcess } from '../../store/slice';

import styles from './default.module.scss';


function Controls() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const inProcess = useSelector(selectInProcess);

  async function handleAdd() {
    // const result = await dispatch<any>(createProduct());
    //
    // if (result) {
    //   navigate(process.env['PUBLIC_URL'] + '/checkouts/' + result['uuid'])
    // }
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Header level={2}>Заказы</Header>
      </div>
      <div className={styles['controls']}>
        <div className={styles['create']}>
          <Button mode={'success'} disabled={inProcess} onClick={handleAdd}>Добавить</Button>
        </div>
      </div>
    </div>
  );
}

export default Controls;