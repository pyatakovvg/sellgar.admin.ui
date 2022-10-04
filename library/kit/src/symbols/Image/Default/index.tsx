
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Error from './Error';
import Loader from './Loader';
import Empty from './Empty';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  path?: string | undefined;
  src: string;
  width: number;
  height: number;
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


function normalizePath(path: string | undefined, src: string, width?: number, height?:number) {
  const params = new URLSearchParams();

  if (width) {
    params.append('width', String(width));
  }

  if (height) {
    params.append('height', String(height));
  }

  const result = params.toString();

  if (path) {
    return path + '/' + src + (result ? `?${result}` : '');
  }
  return src + (result ? `?${result}` : '');
}

function MyImage({ path, src, width, height }: { path?: string | undefined, src: string, width: number, height: number }) {
  const [isLoaded, setLoaded] = React.useState(false);
  const refImage = React.useRef<any>(null);
  const finalPath = React.useMemo(() => normalizePath(path, src, width, height), [path, src, width, height]);

  const className = React.useMemo(() => {
    if (isLoaded) {
      const element = refImage['current'];
      const rect = element.getBoundingClientRect();
      return cn({
        [styles['height']]: rect['width'] < rect['height'],
      });
    }
    return '';
  }, [isLoaded]);

  useImage(finalPath);

  return (
    <img ref={refImage} className={className} src={finalPath} alt={''} onLoad={() => setLoaded(true)} />
  );
}

function Default({ path, src, ...rest }: IProps) {
  const ref = React.useRef<any>(null);

  if (path) {
    if ( ! src) {
      return <Empty />;
    }
  }

  return (
    <div className={styles['wrapper']} ref={ref}>
      <ErrorBoundary FallbackComponent={Error}>
        <Suspense fallback={<Loader />}>
          <div className={styles['image']}>
            <MyImage path={path} src={src} {...rest} />
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

Default.defaultProps = {
  path: null,
  src: null,
  width: null,
  height: null,
};

export default React.memo(Default);
