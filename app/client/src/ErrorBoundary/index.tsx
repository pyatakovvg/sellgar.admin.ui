
import { Header } from "@library/kit";

import React from 'react';
import { useLocation } from 'react-router-dom';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import styles from './default.module.scss';


function ErrorFallback(props: FallbackProps) {
  return (
    <div role="alert" className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={2}>Что-то пошло не так!</Header>
      </div>
      <div className={styles['content']}>
        <pre className={styles['message']}>
          { props.error.message }
        </pre>
      </div>
      <div className={styles['controls']}>
        <button onClick={props.resetErrorBoundary}>Try again</button>
      </div>
    </div>
  );
}

function Boundary({ children }: any) {
  const location = useLocation();

  return (
    <ErrorBoundary key={location.pathname} FallbackComponent={ErrorFallback}>
      { children }
    </ErrorBoundary>
  );
}

export default Boundary;
