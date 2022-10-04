
import React from 'react';

import Default from './Default';


interface IProps {
  type?: 'default';
  path?: string | undefined;
  src: string;
  width: number;
  height: number;
  crossOrigin?: string;
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
