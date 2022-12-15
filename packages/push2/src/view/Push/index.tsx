
import type { IPush } from '../../@domain/global';

import { Timeout } from '@helper/utils';

import React from 'react';

import { deletePush } from '../../models/push';

import cn from 'classnames';
import styles from './defaults.module.scss';


function Push(props: IPush) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const [isShow, setShow] = React.useState(true);

  const classNameClose = React.useMemo(() => cn(styles['close'], 'fas fa-close'), []);
  const classNameNotification = React.useMemo(() => cn(styles['wrapper'], {
    [styles['mode--success']]: props.mode === 'success',
    [styles['mode--danger']]: props.mode === 'danger',
  }, {
    [styles['show']]: isShow,
    [styles['hide']]: ! isShow,
  }), [isShow]);

  function handleClose() {
    // deletePush(props);
    setShow(false);
  }

  React.useEffect(() => {
    const wrapperElement = wrapperRef.current;
    if (wrapperElement) {

      function handleDelete() {
        ! isShow && deletePush(props);
      }
      wrapperElement.addEventListener('animationend', handleDelete);
      return () => {
        wrapperElement.removeEventListener('animationend', handleDelete);
      }
    }
  }, [isShow]);

  React.useEffect(() => {
    const timeout = new Timeout();
    if (props.autoClose) {
      timeout.start(handleClose, 3000);
    }
    return () => {
      timeout.cancel();
    };
  }, []);

  return (
    <div ref={wrapperRef} className={classNameNotification}>
      <div className={styles['content']}>
        {props.title && (
          <span className={styles['title']}>{ props.title }</span>
        )}
        {props.content && (
          <div className={styles['message']}>
            <span className={styles['text']} data-locator="notification.content">{ props.content }</span>
          </div>
        )}
      </div>
      <div className={styles['controls']} onClick={handleClose}>
        <span className={classNameClose} />
      </div>
    </div>
  );
}

export default Push;
