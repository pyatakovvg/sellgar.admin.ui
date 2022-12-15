
import React from 'react';
import { useLocation } from 'react-router-dom';

import styles from './default.module.scss';


function Test() {
  const location: any = useLocation();

  return (
    <div className={styles['wrapper']}>
      <p>УУУпс! Что-то пошло не так!</p>
      <pre>{ location['state']?.['stack']?.['data'] }</pre>
    </div>
  );
}

export default Test;