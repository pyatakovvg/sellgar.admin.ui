
import React from 'react';

import Default from './Default';


type TType = 'default';

interface IProps {
  type?: TType;
  href: string;
  className?: string;
  children: JSX.Element | string;
}


function Factory({ type, children, ...rest }: IProps): JSX.Element | null {
  switch (type) {
    default: return <Default {...rest}>{ children }</Default>;
  }
}

Factory.defaultProps = {
  type: 'default',
  className: null,
  href: '#',
  children: null,
};

export default React.memo(Factory);
