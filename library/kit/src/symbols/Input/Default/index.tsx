
import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


type TType = 'text' | 'password' | 'email';
type TMode = 'default' | 'primary' | 'danger' | 'success';

interface IProps {
  className?: string;
  type?: TType;
  mode?: TMode;
  value?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
}


function PasswordInput({ className, type, mode, value, name, placeholder, autoFocus, disabled, onBlur, onFocus, onChange }: IProps): JSX.Element | null {
  const [isFocus, setFocus] = React.useState<boolean>(false);
  const [isPlaceholder, setPlaceHolder] = React.useState<boolean>(false);

  const wrapperClassName = React.useMemo(() => cn(styles['wrapper'], {
    [styles['mode--default']]: mode === 'default',
    [styles['mode--danger']]: mode === 'danger',
    [styles['mode--primary']]: mode === 'primary',
    [styles['mode--success']]: mode === 'success',
  }, {
    [styles['in-focus']]: isFocus,
    [styles['disabled']]: disabled,
  }), [className, isFocus, disabled]);
  const inputClassName = React.useMemo(() => cn(styles['input']), []);

  function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
    setFocus(true);

    if (onFocus) {
      onFocus(event);
    }
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    setFocus(false);

    if (onBlur) {
      onBlur(event);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(event);
    }
  }

  React.useEffect(() => {
    if ( !! placeholder) {
      setPlaceHolder( ! isFocus && ! value && !! placeholder);
    }
  }, [isFocus, placeholder, value]);

  return (
    <div className={wrapperClassName}>
      <input
        className={inputClassName}
        type={type}
        value={value}
        name={name}
        autoFocus={autoFocus}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {isPlaceholder && (
        <div className={styles['placeholder']}>{ placeholder }</div>
      )}
    </div>
  );
}

PasswordInput.defaultProps = {
  className: null,
  type: 'text',
  mode: 'default',
  value: '',
  name: '',
  placeholder: '',
  autoFocus: false,
  disabled: false,
};

export default PasswordInput;
