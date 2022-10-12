
import React from 'react';

import Default from './Default';


interface IProps {
  type?: 'default';
  page: number;
  totalRows: number;
  onChange(page: number): void;
}


function Factory({ type, ...rest }: IProps): JSX.Element {
  switch(type) {
    default: return <Default {...rest} />;
  }
}

Factory.defaultProps = {
  type: 'default',
  page: 1,
  totalRows: 0,
};

export default Factory;
