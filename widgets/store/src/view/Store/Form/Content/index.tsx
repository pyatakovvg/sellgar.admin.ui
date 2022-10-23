
import React from 'react';

import Simple from './Simple';
import Multiple from './Multiple';


interface IProps {
  type: 'multiple' | 'simple';
}


function Content({ type }: IProps) {
  switch(type) {
    case 'simple': return <Simple />;
    case 'multiple': return <Multiple />;
    default: return null;
  }
}

export default Content;
