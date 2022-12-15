
import React from 'react';
import { NavLink } from 'react-router-dom';

import cn from 'classnames';
import styles from './default.module.scss';


interface ILinkProps {
  isActive: boolean;
  children: string;
}


function Link({ isActive, children }: ILinkProps) {
  const linkClassName = React.useMemo(() => cn(styles['link'], {
    [styles['is-active']]: isActive,
  }), [isActive]);

  return (
    <div className={linkClassName}>
      <span className={styles['title']}>{ children }</span>
    </div>
  );
}

function Item({ path, title }: INavigate) {
  return (
    <NavLink className={styles['wrapper']} to={process.env['PUBLIC_URL'] + path} end>
      { ({ isActive }) => <Link isActive={isActive}>{ title }</Link> }
    </NavLink>
  );
}

export default Item;
