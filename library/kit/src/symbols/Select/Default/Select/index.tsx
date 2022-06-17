
import React from 'react';

import Reset from "./Reset";

import cn from 'classnames';
import styles from './default.module.scss';


type TMode = 'default' | 'primary' | 'danger' | 'success';

interface IProps {
  mode?: TMode;
  value?: any;
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  inFocus: boolean;
  onReset?(): void;
  onClick?(): void;
}


function Select({ inFocus, mode, value, placeholder, disabled, clearable, onClick, onReset }: IProps): JSX.Element | null {
  const [isPlaceholder, setPlaceHolder] = React.useState<boolean>(false);

  const wrapperClassName = React.useMemo(() => cn(styles['wrapper'], {
    [styles['mode--default']]: mode === 'default',
    [styles['mode--danger']]: mode === 'danger',
    [styles['mode--primary']]: mode === 'primary',
    [styles['mode--success']]: mode === 'success',
  }, {
    [styles['in-focus']]: inFocus,
    [styles['disabled']]: disabled,
  }), [inFocus, disabled, mode]);

  function handleClick() {
    if (disabled) {
      return void 0;
    }
    if (onClick) {
      onClick();
    }
  }

  function handleReset() {
    if (disabled) {
      return void 0;
    }
    if (onReset) {
      onReset();
    }
  }

  React.useEffect(() => {
    if ( !! placeholder) {
      setPlaceHolder(! value && !! placeholder);
    }
  }, [placeholder, value]);

  return (
    <div className={wrapperClassName}>
      <div className={styles['content']} onClick={handleClick}>
        <div className={styles['value']}>
          { value }
        </div>
        {isPlaceholder && (
          <div className={styles['placeholder']}>
            { placeholder }
          </div>
        )}
      </div>
      <div className={styles['controls']}>
        {(clearable && value) && <Reset disabled={disabled} onClick={handleReset} />}
      </div>
      <div className={styles['arrow']} onClick={handleClick}>
        <span className={cn(styles['icon'], 'fa-solid fa-sort-down')} />
      </div>
    </div>
  );
}

Select.defaultProps = {
  mode: '',
  value: null,
  placeholder: '',
  disabled: false,
  clearable: false,
  inFocus: false,
};

export default Select;
