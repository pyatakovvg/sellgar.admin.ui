
import React from 'react';

import Header from './Header';
import Content from './Content';


interface IProps {
  type?: string;
  data?: any;
  title?: string;
  alias?: string;
  width?: number;
  align?: 'right' | 'left';
  children?: any;
}


function Column(props: IProps) {
  if (props['type'] === 'header') {
    return (
      <Header
        title={props['title'] || null}
        align={props['align'] || 'center'}
      />
    );
  }
  return (
    <Content
      data={props['data']}
      children={props['children']}
      alias={props['alias'] || null}
      width={props['width'] || 'auto'}
    />
  );
}

export default Column;