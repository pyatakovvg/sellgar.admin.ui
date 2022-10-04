
import React from "react";

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  icon: string;
  isActive: boolean;
  onClick(): void;
}


function Button({ isActive, icon, onClick }: IProps) {
  const iconClassName = React.useMemo(() => cn(styles['icon'], icon), [icon]);
  const buttonClassName = React.useMemo(() => cn(styles['wrapper'], {
    [styles['is-active']]: isActive,
  }), [isActive]);

  function handleClick() {
    onClick();
  }

  return (
    <div className={buttonClassName} onClick={handleClick}>
      <span className={iconClassName} />
    </div>
  );
}

export default Button;
