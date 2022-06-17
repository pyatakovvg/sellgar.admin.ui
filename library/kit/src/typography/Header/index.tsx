
import React from 'react';

import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';
import Level4 from './Level4';
import Level5 from './Level5';
import Level6 from './Level6';


type TLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface IProps {
  level?: TLevel;
  className?: string;
  children: JSX.Element | string;
}


function Factory({ level, children, ...rest }: IProps): JSX.Element | null {
  switch (level) {
    case 2: return <Level2 {...rest}>{ children }</Level2>;
    case 3: return <Level3 {...rest}>{ children }</Level3>;
    case 4: return <Level4 {...rest}>{ children }</Level4>;
    case 5: return <Level5 {...rest}>{ children }</Level5>;
    case 6: return <Level6 {...rest}>{ children }</Level6>;
    default: return <Level1 {...rest}>{ children }</Level1>;
  }
}

Factory.defaultProps = {
  level: 1,
  className: null,
  children: null,
};

export default React.memo(Factory);
