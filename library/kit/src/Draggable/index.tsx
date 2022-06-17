
import React from 'react';

import List from './List';
import Grid from './Grid';


interface IProps {
  type: 'grid' | 'list';
  children: any;
  onChange(oldIndex: number, newIndex: number): void;
}


function FactoryDraggable({ type, children, ...props }: IProps) {
  switch(type) {
    case FactoryDraggable.TYPE_LIST: return <List {...props}>{ children }</List>;
    case FactoryDraggable.TYPE_GRID: return <Grid {...props}>{ children }</Grid>;
    default: return <List {...props}>{ children }</List>;
  }
}

FactoryDraggable.TYPE_LIST = 'list';
FactoryDraggable.TYPE_GRID = 'grid';

export default FactoryDraggable;
