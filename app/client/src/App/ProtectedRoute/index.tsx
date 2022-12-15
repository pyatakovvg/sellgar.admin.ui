
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore, useEvent } from 'effector-react';

import Loader from '../Loader';
import { getProfileFx } from '../store';
import Wrapper from '../wrappers/factory';
import ErrorBoundary from '../../ErrorBoundary';

import { isInitStore, setInitStore } from '../store';


interface IProps {
  route: IRoute;
  navigate: INavigate[];
}


function Index(props: IProps) {
  const navigate = useNavigate();

  const isInit = useStore(isInitStore);
  // const profile = useStore(profileStore);
  const getProfile = useEvent(getProfileFx);

  const Module = props.route.module;


  React.useEffect(() => {
    ! isInit && getProfile()
      .finally(() => {
        setInitStore(true);
      });
  }, [isInit, getProfile, navigate]);

  if ( ! isInit) {
    return (
      <Loader />
    );
  }

  if (props.route?.wrapper) {
    return (
      <Wrapper type={props.route?.wrapper} navigate={props.navigate}>
        <ErrorBoundary>
          <React.Suspense fallback={<Loader />}>
            <Module />
          </React.Suspense>
        </ErrorBoundary>
      </Wrapper>
    );
  }

  return (
    <ErrorBoundary>
      <React.Suspense fallback={<Loader />}>
        <Module />
      </React.Suspense>
    </ErrorBoundary>
  );
}

export default Index;
