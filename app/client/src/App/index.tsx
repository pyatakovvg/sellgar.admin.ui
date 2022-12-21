
import { events } from '@package/request';
import { BaseError } from '@package/errors';

import React from 'react';
import { useNavigate, Route, Routes } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";


interface IProps {
  navigate: INavigate[];
  publicRoutes: IRoute[];
  protectedRoutes: IRoute[];
}


function App(props: IProps) {
  const navigate = useNavigate();

  React.useEffect(() => {
    function handleError(error: BaseError) {
      if (error.status === 401) {
        navigate(process.env.PUBLIC_URL + '/sign-in');
      }
    }

    events.on('error', handleError);
    return () => {
      events.off('error', handleError);
    };
  }, [navigate]);

  return (
    <Routes>
      {props.protectedRoutes.map((route) => (
        <Route
          key={route['path']}
          path={process.env['PUBLIC_URL'] + route['path'].replace(/^\//, '')}
          element={(
            <ProtectedRoute
              route={route}
              navigate={props.navigate}
            />
          )}
        />
      ))}
      {props.publicRoutes.map((route) => (
        <Route
          key={route['path']}
          path={process.env['PUBLIC_URL'] + route['path'].replace(/^\//, '')}
          element={(
            <PublicRoute
              route={route}
              navigate={props.navigate}
            />
          )}
        />
      ))}
    </Routes>
  );
}

export default App;
