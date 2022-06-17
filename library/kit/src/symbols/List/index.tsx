
import React from 'react';

import DefaultList from './Default';


type TType = 'list';
type TOption = {
  [key: string]: any;
};

interface IProps {
  className?: string;
  type?: TType;
  value?: any;
  options: Array<TOption>;
  optionKey?: string;
  optionValue?: string;
  disabled?: boolean;
  onClick?(value: any): void;
}


function Factory({ type, ...rest }: IProps): JSX.Element | null {
  switch(type) {
    default: return <DefaultList {...rest} />;
  }
}

export default React.memo(Factory);
