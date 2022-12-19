
import React from 'react';


const context = React.createContext({
  units: [],
  brands: [],
  groups: [],
  categories: [],
  currencies: [],
} as any);

export const Provider = context.Provider;


export function useGetUnits() {
  const contextResult = React.useContext(context);
  return contextResult.units;
}

export function useGetBrands() {
  const contextResult = React.useContext(context);
  return contextResult.brands;
}

export function useGetGroups() {
  const contextResult = React.useContext(context);
  return contextResult.groups;
}

export function useGetCategories() {
  const contextResult = React.useContext(context);
  return contextResult.categories;
}

export function useGetCurrencies() {
  const contextResult = React.useContext(context);
  return contextResult.currencies;
}
