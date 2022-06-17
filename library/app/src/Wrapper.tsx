
import React from 'react';

import useLoadComponent from "./helpers/useLoadComponent";


interface IWrapper {
  component: Promise<any>;
}


class Wrapper implements IWrapper {
  readonly component: Promise<any>;

  constructor(component: Promise<any>) {

    this.component = component;
  }

  useLoad() {
    return useLoadComponent(this['component']);
  }
}

export default Wrapper;
