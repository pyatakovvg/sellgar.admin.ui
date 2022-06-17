
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
  isActive: boolean;
  children: any;
}


function Link({ isActive, children }: ILinkProps): JSX.Element {
  const linkClassName = React.useMemo(() => cn(styles['link'], {
    [styles['is-active']]: isActive,
  }), [isActive]);

  return (
    <div className={linkClassName}>
      <span className={styles['title']}>{ children }</span>
    </div>
  );
}

function Item({ path, title }: IItemProps): JSX.Element {
  return (
      <NavLink className={styles['wrapper']} to={process.env['PUBLIC_URL'] + path}>
        {({ isActive }) => {
          return (<Link isActive={isActive}>{ title }</Link>)
        }}
      </NavLink>
  );
}

export default Item;
