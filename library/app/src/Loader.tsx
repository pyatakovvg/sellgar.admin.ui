
import React from 'react';

import useLoadComponent from "./helpers/useLoadComponent";


interface ILoader {
  component: Promise<any>;
}


class Loader implements ILoader {
  readonly component: Promise<any>;

  constructor(component: Promise<any>) {
    this.component = component;
  }

  useLoad() {
    return useLoadComponent(this['component']);
  }
}

export default Loader;
