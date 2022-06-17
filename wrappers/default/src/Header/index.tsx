
import { Logotype } from '@library/kit';

import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './default.module.scss';


function Header(): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['logotype']}>
        <NavLink to={process.env['PUBLIC_URL'] + '/'}>
          <Logotype />
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
