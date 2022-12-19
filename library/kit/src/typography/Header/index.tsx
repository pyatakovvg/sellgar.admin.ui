
import React from 'react';

import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';
import Level4 from './Level4';


type TLevel = 1 | 2 | 3 | 4;

interface IProps {
  level?: TLevel;
  className?: string | undefined;
  children: any;
}


function Factory({ level, children, ...rest }: IProps) {
  switch (level) {
    case 2: return <Level2 {...rest}>{ children }</Level2>;
    case 3: return <Level3 {...rest}>{ children }</Level3>;
    case 4: return <Level4 {...rest}>{ children }</Level4>;
    default: return <Level1 {...rest}>{ children }</Level1>;
  }
}

Factory.defaultProps = {
  level: 1,
  className: null,
  children: null,
};

export default React.memo(Factory);
