
import React from 'react';
import ReactDOM from 'react-dom';
import { useStore } from 'effector-react';

import Push from './Push';

import { $pushStore } from '../models/push';

import styles from './defaults.module.scss';


function PushProvider() {
  const pushStore = useStore($pushStore);
  const [portal, setPortal] = React.useState<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const body = document.body;
    const portal = document.createElement('div');
    portal.id = 'push';
    portal.style.position = 'fixed';
    portal.style.bottom = '32px';
    portal.style.right = '32px';
    portal.style.zIndex = '9999';

    body.appendChild(portal);

    setPortal(portal);
  }, []);


  if ( ! portal) {
    return null;
  }

  return ReactDOM.createPortal((
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        {pushStore.map((push) => (
          <Push key={push.uuid} {...push} />
        ))}
      </div>
    </div>
  ), portal);
}

export default PushProvider;
