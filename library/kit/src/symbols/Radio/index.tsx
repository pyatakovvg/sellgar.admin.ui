
import React from 'react';

import EmptyRadio from './Empty';
import DefaultRadio from './Default';
import RadioWrapper from './Radio';


type TType = 'default' | 'empty';

interface IProps {
  className?: string;
  type?: TType;
  value?: any | null;
  disabled?: boolean;
  children?: any;
}


function Factory({ type, children, ...rest }: IProps) {
  switch(type) {
    case 'empty': return <EmptyRadio {...rest}>{ children }</EmptyRadio>
    default: return <DefaultRadio {...rest}>{ children }</DefaultRadio>;
  }
}

export default React.memo(Factory);
export const Wrapper = React.memo(RadioWrapper);
