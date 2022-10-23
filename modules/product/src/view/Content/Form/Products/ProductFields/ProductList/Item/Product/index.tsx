
import { Text } from '@library/kit';

import React from 'react';
import { useDispatch } from 'react-redux';

import { getProductFromStore } from '../../../../../../../../store/commands';

import styles from './default.module.scss';


interface IProps {
  uuid: string;
}


function Product({ uuid }: IProps) {
  const dispatch = useDispatch();
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    dispatch(getProductFromStore(uuid))
      .then((data: any) => {
        setProduct(data);
      });
  }, []);

  if ( ! product) {
    return <p>Loading</p>;
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <div className={styles['line']}>
          <Text>{ product['name'] }</Text>
        </div>
        <div className={styles['line']}>
          <Text type={'description'}>Арт.: { product['vendor'] }</Text>
        </div>
      </div>
      <div className={styles['price']}>
        <div className={styles['line']}>
          <Text type={'strong'}>{ product['price'] } { product['currency']['displayName'] }</Text>
        </div>
        <div className={styles['line']}>
          <Text type={'description'}>{ product['purchasePrice'] } { product['currency']['displayName'] }</Text>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Product);
