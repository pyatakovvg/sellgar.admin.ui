
import React from 'react';
import { NavLink } from 'react-router-dom';

import cn from 'classnames';
import styles from './default.module.scss';


interface IItemProps {
  path: string;
  title: string;
  icon: string;
}

interface ILinkProps {
  icon: string;
  isActive: boolean;
  children: any;
}


function Link({ isActive, children, icon }: ILinkProps) {
  const iconClassName = React.useMemo(() => cn(styles['icon'], icon), [icon]);
  const linkClassName = React.useMemo(() => cn(styles['link'], {
    [styles['is-active']]: isActive,
  }), [isActive]);

  return (
    <div className={linkClassName}>
      <div className={iconClassName} />
      <div className={styles['label']}>
        <span className={styles['title']}>{ children }</span>
      </div>
    </div>
  );
}

function Item({ path, title, icon }: IItemProps) {
  return (
      <NavLink className={styles['wrapper']} to={process.env['PUBLIC_URL'] + path}>
        {({ isActive }) => (
          <Link isActive={isActive} icon={icon}>{ title }</Link>
        )}
      </NavLink>
  );
}

export default React.memo(Item);
