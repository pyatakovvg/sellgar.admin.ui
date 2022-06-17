
import React, { useEffect, useMemo } from 'react';

import cn from 'classnames';
import styles from './defaults.module.scss';


interface IPushProps {
  uuid: string;
  title: string;
  content: string;
  mode: string;
  autoClose: boolean;
  timeout: number;
  allowHTML: boolean;
  onClose(uuid: string): void;
}


function Notification({ uuid, title, content, mode, autoClose, timeout, allowHTML, onClose }: IPushProps) {
  const classNameClose = useMemo(() => cn(styles['close'], 'fas fa-close'), []);
  const classNameNotification = useMemo(() => cn(styles['wrapper'], {
    [styles['mode--success']]: mode === 'success',
    [styles['mode--danger']]: mode === 'danger',
  }), []);


  function handleClose() {
    onClose(uuid);
  }

  useEffect(() => {
    let timer: any = null;
    if (autoClose) {
      timer = setTimeout(handleClose, timeout * 1000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  return (
    <div className={classNameNotification} data-locator="notification">
      <div className={styles['content']}>
        {title && (
          <span className={styles['title']} role="header" title={ title } data-locator="notification.header">{ title }</span>
        )}
        {content && (
          <div className={styles['message']}>
            {allowHTML
              ? <span className={styles['text']} data-locator="notification.content" dangerouslySetInnerHTML={{ __html: content }} />
              : <span className={styles['text']} data-locator="notification.content">{ content }</span>}
          </div>
        )}
      </div>
      <div className={styles['controls']} onClick={handleClose}>
        <span className={classNameClose} />
      </div>
    </div>
  );
}

Notification.defaultProps = {
  uuid: null,
  autoClose: true,
  timeout: 4,
  title: '',
  content: '',
  mode: 'default',
  allowHTML: false,
};

export default Notification;
