
import React from 'react';

import Default from './Default';


interface IMode {
  uuid: string;
  value: string;
  unit: string;
}

interface IProps {
  type?: 'default';
  uuid: string;
  count?: number;
  gallery: Array<string>;
  title: string;
  modes: Array<IMode>;
  disabled?: boolean;
  inProcess?: boolean;
  onClick?(): void;
  onSelect?(uuid: object): void;
}


function Factory({ type, ...rest }: IProps): JSX.Element {
  switch(type) {
    default: return <Default {...rest} />
  }
}

export default Factory;
