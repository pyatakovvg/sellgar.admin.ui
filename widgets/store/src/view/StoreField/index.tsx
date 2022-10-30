
import { BaseField } from '@library/kit';

import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, WrappedFieldProps } from 'redux-form';

import Empty from './Empty';
import Product from './Product';

import Gallery from '../index';
import { getProduct, openStore, closeStore } from '../../store/commands';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps extends WrappedFieldProps {
  name: string;
  [key: string]: any;
}


function BaseInputField({ input, meta: { error, invalid, touched, active }, ...props }: IProps) {
  const dispatch = useDispatch();
  const [product, setProduct] = React.useState<any>(null);

  React.useEffect(() => {
    (async () => {
      const result = await dispatch(getProduct(input['value']));
      if (result) {
        setProduct(result);
      }
    })();
  }, [input['value']]);

  function handleOpenGallery() {
    dispatch(openStore('store'));
  }

  function handleChange(product: any) {
    input.onChange(product);
    dispatch(closeStore());
  }

  return (
    <>
      <BaseField
        {...props}
        {...input}
        error={(touched && invalid && ! active) ? error : null}
      >
        <div className={styles['wrapper']}>
          <div className={styles['content']} onClick={handleOpenGallery}>
            { !! product ? (
              <Product {...product} />
            ) : (
              <Empty />
            )}
          </div>
          <div className={styles['thumb']}>
            <span className={cn(styles['icon'], 'fa-solid fa-store')} />
          </div>
        </div>
      </BaseField>
      <Gallery name={'store'} value={input['value'] ?? null} onSubmit={handleChange} />
    </>
  );
}

function InputField({ name, type, ...rest }: any) {
  return (
    <Field
      name={name}
      type={type}
      {...rest}
      component={BaseInputField}
    />
  );
}

InputField.defaultProps = {
  name: null,
  type: null,
  mode: 'default',
};

export default React.memo(InputField);
