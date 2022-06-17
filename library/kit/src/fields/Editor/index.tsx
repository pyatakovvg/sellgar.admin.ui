
import React from 'react';
import { Field, WrappedFieldProps } from 'redux-form';

import BaseField from '../BaseField';
import Input from '../../Editor';


interface IProps extends WrappedFieldProps {
  name: string;
  mode?: 'default' | 'primary' | 'danger';
  type?: string;
  [key: string]: any;
}


function BaseInputField({ input, meta: { error, invalid, touched, active }, ...props }: IProps) {
  return (
    <BaseField
      {...props}
      {...input}
      error={(touched && invalid && ! active) ? error : null}
    >
      <Input />
    </BaseField>
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

export default InputField;
