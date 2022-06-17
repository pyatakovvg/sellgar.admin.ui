
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Error from './Error';
import Loader from './Loader';

import styles from './default.module.scss';


interface IProps {
  type?: 'default';
  src: string;
}

interface IImage {
  status: 'pending' | 'resolved' | 'rejected';
  promise: Promise<any>;
  error: Error | null;
}

interface ICache {
  [key: string]: IImage;
}

const cache: ICache = {};


function createPromise(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = function() {
      image
        .decode()
          .then(resolve)
          .catch(reject);
    }
    image.onerror = reject;
    image.src = src;
  });
}

function useImage(srcImg: string) {
  if ( ! cache[srcImg]) {
    cache[srcImg] = {
      promise: createPromise(srcImg),
      status: 'pending',
      error: null,
    }
  }

  cache[srcImg]
    .promise
      .then(() => {
        cache[srcImg] = {
          ...cache[srcImg],
          status: 'resolved',
        }
      })
      .catch((error) => {
        cache[srcImg] = {
          ...cache[srcImg],
          status: 'rejected',
          error,
        }
      });

  if (cache[srcImg]['status'] === 'resolved') {
    return {
      error: null,
      isLoading: false,
    };
  }

  if (cache[srcImg]['status'] === 'rejected') {
    throw cache[srcImg].error;
  }

  throw cache[srcImg].promise;
}

function MyImage({ src }: { src: string }): JSX.Element {
  useImage(src);

  return <img src={src} alt={''} />;
}

function Default({ src }: IProps): JSX.Element | null {
  return (
    <div className={styles['wrapper']}>
      <ErrorBoundary FallbackComponent={Error}>
        <Suspense fallback={<Loader />}>
          <div className={styles['image']}>
            <MyImage src={src} />
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

Default.defaultProps = {
  src: null,
};

export default Default;
