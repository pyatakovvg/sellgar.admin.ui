
import React from 'react';

import Small from './Small';
import Middle from './Middle';
import Big from './Big';


type TType = 'small' | 'middle' | 'big';

interface IProps {
  type?: TType;
  className?: string;
}


function Factory({ type, ...rest }: IProps): JSX.Element | null {
  switch (type) {
    case 'big': return <Big {...rest} />;
    case 'middle': return <Middle {...rest} />;
    default: return <Small {...rest} />;
  }
}

Factory.defaultProps = {
  type: 'default',
  className: null,
  href: '#',
  children: null,
};

export default React.memo(Factory);
