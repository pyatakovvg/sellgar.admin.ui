
import React from 'react';
import { useSelector } from 'react-redux';

import Table from './Table';
import Empty from './Empty';

import { selectData } from '../../index';


function Products() {
  const data: Array<any> = useSelector(selectData);

  if ( ! data.length) {
    return <Empty />;
  }
  return <Table />;
}

export default React.memo(Products);