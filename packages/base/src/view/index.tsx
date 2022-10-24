
import React from 'react';
import { useDispatch } from 'react-redux';

import {
  getUnits,
  getBrands,
  getGroups,
  getCategories,
  getCurrencies,
} from '../store/commands';
import { resetStateAction } from '../store/slice';


interface IProps {
  children: any;
}


function Base({ children }: IProps) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    (async function init() {
      dispatch(getUnits());
      dispatch(getGroups());
      dispatch(getBrands());
      dispatch(getCurrencies());
      dispatch(getCategories());
    })();
    return () => {
      dispatch(resetStateAction());
    };
  }, []);

  return children;
}

export default Base;
