
import { Image, BaseField } from '@library/kit';

import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, WrappedFieldProps } from 'redux-form';

import Empty from './Empty';
import Gallery from '../index';
import { openGallery, closeGallery } from '../../store/commands';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps extends WrappedFieldProps {
  name: string;
  mode?: 'default' | 'primary' | 'danger';
  type?: string;
  width: number;
  height: number;
  [key: string]: any;
}


function BaseInputField({ input, meta: { error, invalid, touched, active }, ...props }: IProps) {
  const dispatch = useDispatch();

  function handleOpenGallery() {
    dispatch(openGallery('gallery'));
  }

  function handleChange(image: any) {
    input.onChange(image);
    dispatch(closeGallery());
  }

  return (
    <div className={styles['wrapper']}>
      <BaseField
        {...props}
        {...input}
        error={(touched && invalid && ! active) ? error : null}
      >
        <div className={styles['content']} onClick={handleOpenGallery}>
          { !! input['value'] ? (
            <Image
              width={props['width']}
              height={props['height']}
              src={input['value']['uuid']}
              path={process.env['REACT_APP_GATEWAY_API'] + '/api/v1/images'}
            />
          ) : (
            <Empty />
          )}
          <div className={styles['thumb']}>
            <span className={cn(styles['icon'], 'fa-solid fa-images')} />
          </div>
        </div>
      </BaseField>
      <Gallery name={'gallery'} value={input['value'] ?? null} onSubmit={handleChange} />
    </div>
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
