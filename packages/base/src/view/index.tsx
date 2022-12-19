
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';

import {
  getUnits,
  getBrands,
  getGroups,
  getCategories,
  getCurrencies,
} from '../store/commands';
import {
  resetStateAction,

  selectUnits,
  selectBrands,
  selectGroups,
  selectCategories,
  selectCurrencies,
} from '../store/slice';
import { setupStore } from '../store/create';
import { Provider as BaseDataProvider } from '../context';


interface IProps {
  children: any;
}

const store = setupStore();


function Base({ children }: IProps) {
  const dispatch = useDispatch();

  const units = useSelector(selectUnits);
  const brands = useSelector(selectBrands);
  const groups = useSelector(selectGroups);
  const categories = useSelector(selectCategories);
  const currencies = useSelector(selectCurrencies);

  React.useEffect(() => {
    (async function() {
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

  return (
    <BaseDataProvider value={{
      units,
      brands,
      groups,
      categories,
      currencies,
    }}>
      { children }
    </BaseDataProvider>
  );
}

export default function({ children }: any) {
  return (
    <Provider store={store}>
      <Base>
        { children }
      </Base>
    </Provider>
  );
};
