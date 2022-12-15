
import React from 'react';


const context = React.createContext<any>(null);

export const DataDialogProvider = context.Provider;

export function useData() {
  return React.useContext(context);
}
