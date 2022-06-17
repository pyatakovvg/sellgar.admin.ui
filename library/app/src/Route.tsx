
import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';

import Module from "./Module";


interface IRouteOptions {
  protected: boolean;
}

type TRouteOption = IRouteOptions | null;

interface IRoute {
  path: string;
  wrapper?: string;
  module: Promise<any>;
}

interface IRouteClass {
  path: string;
  wrapper?: string;
  module: Module;
  options: TRouteOption;
}


class Router implements IRouteClass {
  readonly path: string;
  readonly wrapper: string;
  readonly module: Module;
  readonly options: TRouteOption;

  constructor(route: IRoute, options?: TRouteOption) {

    this.path = route['path'].replace(/^\//, '');
    this.wrapper = route['wrapper'] || 'default';
    this.module = new Module(route['module']);
    this.options = options || null;
  }

  createView(app: any) {
    const self = this;
    const isProtected = self?.['options']?.['protected'] ?? false;
    const wrapper = app['wrappers'][self['wrapper']];

    return function() {
      const dispatch = useDispatch();

      const Wrapper = wrapper.useLoad();
      const Loader = app.loader.useLoad();
      const Module = self.module.useLoad();
      const [isLoading, setLoading] = useState( ! app['isInit']);

      useEffect(() => {
        function handleInit<S>(state: S) {
          app['isInit'] = true;
          setLoading( ! state);
        }

        app.events.on('init', handleInit);
        return () => {
          app.events.off('init', handleInit);
        };
      }, []);

      useEffect(() => {
        if (isProtected && isLoading) {
          app.callbacks.exec('check:profile', dispatch);
        }
        else {
          app.events.emit('init', true);
        }
      }, []);

      if (isLoading || ! Wrapper || ! Module) {
        return Loader ? <Loader /> : null;
      }

      return (
        <Wrapper>
          <Module />
        </Wrapper>
      );
    }
  }
}

export default Router;
