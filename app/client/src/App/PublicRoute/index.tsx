
import React from 'react';
import { useStore } from 'effector-react';

import Loader from '../Loader';
import Wrapper from '../wrappers/factory';

import { isInitStore, setInitStore } from '../store';


interface IProps {
  route: IRoute;
  navigate: INavigate[];
}


function PublicRoute(props: IProps) {
  const isInit = useStore(isInitStore);

  React.useEffect(() => {
    setInitStore(true);
  }, []);

  if ( ! isInit) {
    return (
      <Loader />
    );
  }

  const Module = props.route.module;

  if (props.route?.wrapper) {
    return (
      <Wrapper type={props.route?.wrapper} navigate={props.navigate}>
        <React.Suspense fallback={<Loader />}>
          <Module />
        </React.Suspense>
      </Wrapper>
    );
  }

  return (
    <React.Suspense fallback={<Loader />}>
      <Module />
    </React.Suspense>
  );
}

export default PublicRoute;
