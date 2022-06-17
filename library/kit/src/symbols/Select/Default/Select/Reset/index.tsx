
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  disabled: boolean;
  onClick(): void;
}


function Reset({ disabled, onClick }: IProps): JSX.Element | null {
  const wrapperClassName = React.useMemo(() => cn(styles['wrapper'], {
    [styles['disabled']]: disabled,
  }), [disabled]);

  function handleClick() {
    if (disabled) {
      return void 0;
    }

    onClick();
  }

  return (
    <div className={wrapperClassName} onClick={handleClick}>
      <span className={cn(styles['icon'], 'fa-solid fa-xmark')} />
    </div>
  );
}

Reset.defaultProps = {
  disabled: false,
};

export default Reset;
