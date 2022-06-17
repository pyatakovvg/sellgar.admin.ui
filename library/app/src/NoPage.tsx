
import React from 'react';
import { Routes, Route as ReactRoute } from 'react-router-dom';


class NotFound {
  createView() {
    return function() {
      return (
        <Routes>
          <ReactRoute
            path={'*'}
            element={(
              <div>Page not found</div>
            )}
          />
        </Routes>
      );
    }
  }
}

export default NotFound;
