
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


function SignIn() {
  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-user'), []);

  return (
    <div className={styles['wrapper']}>
      <span className={iconClassName} />
      <span className={styles['title']}>Войти</span>
    </div>
  );
}

export default SignIn;
