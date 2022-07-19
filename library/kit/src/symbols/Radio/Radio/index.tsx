
import React from 'react';

import Context from '../context';


interface IProps {
  value?: any | null;
  children: any;
  onChange(value: any, name?: string): void;
  onFocus?(value: any): void;
  onBlur?(value: any): void;
}


function Default({ children, ...props }: IProps) {
  return (
    <Context.Provider value={props}>
      { children }
    </Context.Provider>
  );
}

export default Default;
