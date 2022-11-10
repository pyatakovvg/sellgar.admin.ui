
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
  readOnly?: boolean;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  maxLength?: number;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
}


function DefaultInput({ className, type, mode, value, name, readOnly, placeholder, autoFocus, disabled, onBlur, onFocus, onChange, ...rest }: IProps) {
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
    [styles['read-only']]: readOnly,
  }), [className, isFocus, disabled, mode]);
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
        {...rest}
        type={type || 'text'}
        value={value || ''}
        name={name || ''}
        readOnly={readOnly || false}
        autoFocus={autoFocus || false}
        disabled={disabled || false}
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

DefaultInput.defaultProps = {
  className: null,
  type: 'text',
  mode: 'default',
  value: '',
  name: '',
  readOnly: false,
  placeholder: '',
  autoFocus: false,
  disabled: false,
};

export default DefaultInput;
