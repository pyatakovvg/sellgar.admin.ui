
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
    [styles['disabled']]: props.disabled,
    [styles['in-process']]: props.process,
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
      <span className={cn(styles['icon'], 'fa fa-pen')} />
    </div>
  );
}

export default React.memo(Control);