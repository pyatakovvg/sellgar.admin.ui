
import React from 'react';

import DefaultInput from './Default';


type TType = 'circle' | 'text';
type TMode = 'danger' | 'success' | 'primary' | 'default';

interface IProps {
  type?: TType;
  className?: string;
  mode?: TMode,
  children: any;
}


function Factory({ type, children, ...rest }: IProps) {
  switch(type) {
    default: return <DefaultInput {...rest}>{ children }</DefaultInput>;
  }
}

Factory.defaultProps = {
  type: 'text',
  className: '',
};

export default React.memo(Factory);
