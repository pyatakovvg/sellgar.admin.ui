
import React from 'react';


type TRouteOption = IRouteOptions | null;

interface IRoute {
  path: string;
  wrapper?: string;
  module: Promise<any>;
}

interface IRouteOptions {
  protected: boolean;
}

interface IRouter {
  routes: Array<IRoute>;
  options: TRouteOption;
}


class Router implements IRouter {
  readonly routes: Array<IRoute>;
  readonly options: TRouteOption;

  constructor(routes: Array<IRoute>, options?: TRouteOption) {

    this.routes = routes;
    this.options = options || null;
  }
}

export default Router;
