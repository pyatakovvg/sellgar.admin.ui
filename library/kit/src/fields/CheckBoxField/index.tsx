
import React from 'react';
import { Field, WrappedFieldProps } from 'redux-form';

import CheckBox from '../../symbols/Checkbox';


interface IProps {
  name: string;
  children?: any;
  mode?: string;
  disabled?: boolean;
  onChange?(value: boolean): void;
}


function InputField({ input, children, ...props }: WrappedFieldProps & IProps): any {
  let value = input['value'];
  if (typeof value !== 'boolean') {
    value = false;
  }

  return (
    <CheckBox {...input} value={value} {...props}>{ children }</CheckBox>
  );
}

function CheckBoxField({ name, ...props }: IProps) {
  return (
    // @ts-ignore
    <Field name={name} {...props} component={InputField} />
  );
}

export default CheckBoxField;
