
import React from 'react';
import { NavLink } from 'react-router-dom';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  href: string;
  title: string;
}

interface ILinkProps {
  isActive: boolean;
  children: string;
}


function Link({ isActive, children }: ILinkProps) {
  const linkClassName = React.useMemo(() => cn(styles['link'], {
    [styles['active']]: isActive,
  }), [isActive]);

  return (
    <div className={linkClassName}>
      <span className={styles['title']}>{ children }</span>
    </div>
  );
}

function Item({ title, href }: IProps): JSX.Element {
   return (
    <NavLink className={styles['wrapper']} to={process.env['PUBLIC_URL'] + href}>
      {({ isActive }) => <Link isActive={isActive}>{ title }</Link>}
    </NavLink>
  );
}

Item.defaultProps = {
  title: '',
  href: '',
};

export default Item;
