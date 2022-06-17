
import React from 'react';

import useLoadComponent from "./helpers/useLoadComponent";


interface IModule {
  component: Promise<any>;
}


class Module implements IModule {
  readonly component: Promise<any>;

  constructor(component: Promise<any>) {

    this.component = component;
  }

  useLoad() {
    return useLoadComponent(this['component']);
  }
}

export default Module;
