
import React from 'react';

import { Provider } from './context';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  children: any;
  className?: string;
}


function ScrollProvider({ className, children }: IProps) {
  const lastDate = React.useRef(Date.now());
  const timer = React.useRef<any>(null);
  const [isScroll, setScroll] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const wrapperClassName = React.useMemo(() => cn(styles['wrapper'], className || ''), [className]);


  React.useEffect(() => {
    function handleScroll() {
      if (Date.now() - lastDate['current'] > 100) {
        setScroll(true);
      }

      lastDate['current'] = Date.now();

      clearTimeout(timer['current'])

      timer['current'] = setTimeout(() => {
        if (Date.now() - lastDate['current'] > 99) {
          setScroll(false);
        }
      }, 100);
    }

    const wrapperElement = wrapperRef['current'];

    if (wrapperElement) {
      wrapperElement?.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (wrapperElement) {
        wrapperElement?.removeEventListener('scroll', handleScroll);
      }
    }
  }, []);

  return (
    <Provider value={{ isScroll }}>
      <div ref={wrapperRef} className={wrapperClassName}>
        { children }
      </div>
    </Provider>
  );
}

export default ScrollProvider;
export { context } from './context';
