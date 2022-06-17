
import { selectData } from '../store/slice';

import React from 'react';
import { useSelector } from 'react-redux';

import SignIn from './SignIn';



function Widget() {
  const data = useSelector(selectData);

  if ( ! data) {
    return (
      <SignIn />
    );
  }

  return null;
}

export default Widget;
