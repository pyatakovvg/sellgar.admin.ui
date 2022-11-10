
import React from 'react';

import DefaultSelect from './Default';


type TType = 'list' | 'select';
type TMode = 'default' | 'primary' | 'danger' | 'success';
type TOption = {
  [key: string]: any;
};

interface IProps {
  className?: string;
  type?: TType;
  mode?: TMode;
  value?: any | null;
  options: Array<TOption>,
  optionKey?: string;
  optionValue?: string;
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  onChange?(value: any): void;
  onFocus?(): void;
  onBlur?(): void;
}


function Factory({ type, ...rest }: IProps) {
  switch(type) {
    default: return <DefaultSelect {...rest} />;
  }
}

export default React.memo(Factory);
