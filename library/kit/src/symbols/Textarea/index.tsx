
import React from 'react';

import DefaultInput from './Default';


type TMode = 'default' | 'primary' | 'danger' | 'success';

interface IProps {
  className?: string;
  type?: string;
  mode?: TMode;
  value?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
}


function Factory({ type, ...rest }: IProps): JSX.Element | null {
  switch(type) {
    default: return <DefaultInput type={'text'} {...rest} />;
  }
}

export default React.memo(Factory);
