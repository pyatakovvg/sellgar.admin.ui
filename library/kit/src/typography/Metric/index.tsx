
import React from 'react';

import Default from './Default';


type TType = 'default';

interface IProps {
  type?: TType;
  className?: string;
  label?: string | null;
  children: string;
}


function Factory({ type, children, ...rest }: IProps): JSX.Element {
  switch (type) {
    default: return <Default {...rest}>{ children }</Default>;
  }
}

Factory.defaultProps = {
  type: 'default',
  className: null,
  label: null,
  children: '',
};

export default React.memo(Factory);
