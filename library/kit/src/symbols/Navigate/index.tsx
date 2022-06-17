
import React from 'react';

import Default from './Default';


interface IProps {
  type?: 'default';
  items: Array<object>;
}


function Factory({ type, ...rest }: IProps) {
  switch(type) {
    default: return <Default {...rest} />;
  }
}

Factory.defaultProps = {
  type: 'default',
  src: null,
  decode: true,
  crossOrigin: null,
};

export default Factory;
