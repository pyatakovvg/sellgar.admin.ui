
import React from 'react';
import { WrappedFieldInputProps } from 'redux-form';

import styles from './default.module.scss';


interface IProps extends WrappedFieldInputProps {
  required?: boolean;
  mode?: 'default' | 'primary' | 'danger';
  label?: string;
  error: string | null;
  children: any;
  options?: Array<any>;
  [key: string]: any;
}


function BaseField({ required, children, label, error, ...props }: IProps) {
  return (
    <div className={styles['wrapper']}>
      {label && (
        <div className={styles['label']}>
          { label }
          {required && (
            <span className={styles['required']}>*</span>
          )}
        </div>
      )}
      <div className={styles['container']}>
        {React.cloneElement(children, {
          ...props,
          mode: !! error ? 'danger' : props['mode'],
        })}
      </div>
      { !! error && (
        <div className={styles['error']}>
          <span className={styles['message']}>{ error }</span>
        </div>
      )}
    </div>
  );
}

BaseField.defaultProps = {
  children: null,
  error: null
};

export default BaseField;
