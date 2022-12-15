
import React from 'react';

import cn from 'classnames';
import styles from './index.module.scss';


interface IProps {
  onClick?(): void;
  process?: boolean;
  disabled?: boolean;
}


function Control(props: IProps) {
  const buttonClassName = React.useMemo(() => cn(styles['button'], {
    [styles['in-process']]: props.process,
    [styles['disabled']]: props.disabled,
  }), [props.disabled, props.process]);

  function handleClick() {
    if (props.disabled || props.process) {
      return void 0;
    }
    if (props.onClick) {
      props.onClick();
    }
  }

  return (
    <div className={buttonClassName} onClick={handleClick}>
      <span className={cn(styles['icon'], 'far fa-trash-alt')} />
    </div>
  );
}

export default React.memo(Control);