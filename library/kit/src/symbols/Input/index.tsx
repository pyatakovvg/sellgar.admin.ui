
import React from 'react';

import DefaultInput from './Default';
import SearchInput from './Search';


type TType = 'text' | 'password' | 'email' | 'search';
type TMode = 'default' | 'primary' | 'danger' | 'success';

interface IProps {
  className?: string;
  type?: TType;
  mode?: TMode;
  value?: string;
  name?: string;
  maxLength?: number;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
}


function Factory({ type, ...rest }: IProps) {
  switch(type) {
    case 'search': return <SearchInput {...rest} />;
    case 'email': return <DefaultInput type={'email'} {...rest} />;
    case 'password': return <DefaultInput type={'password'} {...rest} />;
    default: return <DefaultInput type={'text'} {...rest} />;
  }
}

export default React.memo(Factory);
