
import { Events } from '@helper/utils';

import React from 'react';


interface IContextValue {
  routes: Array<object>;
  events: Events | null;
  config: any;
}


export const context = React.createContext<IContextValue>({
  routes: [],
  events: null,
  config: null,
});

export const Provider = context.Provider;
