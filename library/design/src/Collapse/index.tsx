
import React from 'react';

import Default from './Default';


interface IProps {
  type?: 'default';
  title: string;
  active?: boolean;
  children: any;
  onClick?(): void;
}


function Factory({ type, children, ...rest }: IProps): JSX.Element {
  switch(type) {
    default: return <Default {...rest}>{ children }</Default>;
  }
}

Factory.defaultProps = {
  type: 'default',
  title: 'Collapse title',
  active: false,
  children: null,
};

export default Factory;
