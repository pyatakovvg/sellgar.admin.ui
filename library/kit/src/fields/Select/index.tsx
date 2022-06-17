
import React from 'react';
import { Field, WrappedFieldProps } from 'redux-form';

import BaseField from '../BaseField';
import Select from '../../symbols/Select';


interface IProps extends WrappedFieldProps {
  name: string;
  mode?: 'default' | 'primary' | 'danger';
  type?: string;
  options: Array<any>;
  input: any;
  [key: string]: any;
}


function BaseInputField({ input: { options, ...input }, meta: { error, invalid, touched, active }, ...props }: IProps) {
  return (
    <BaseField
      {...props}
      {...input}
      error={(touched && invalid && ! active) ? error : null}
    >
      <Select options={options} />
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
