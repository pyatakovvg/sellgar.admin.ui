
import React, { useState, useRef, useMemo, useEffect } from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


type TMode = 'default' | 'primary' | 'danger' | 'success';

interface IProps {
  className?: string;
  type?: string;
  mode?: TMode;
  value?: string;
  name?: string;
  placeholder?: string;
  readOnly?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
}


function TextareaDefault({ className, readOnly, mode, disabled, name, placeholder, value, onChange, onFocus, onBlur, ...props }: IProps) {
  const inputRef = useRef(null);
  const [inFocus, setFocus] = useState(false);

  const inputClassName = useMemo(() => {
    return cn(styles['wrapper'], className, {
      [styles['focus']]: inFocus,
      [styles['disabled']]: disabled,
      [styles['read-only']]: readOnly,
    }, {
      [styles['mode--danger']]: mode === 'danger',
    });
  }, [className, disabled, mode, readOnly, inFocus]);

  function hasPlaceholder() {
    if (disabled) {
      return false;
    }

    if (readOnly) {
      return false;
    }

    if (placeholder) {
      if (inFocus) {
        return false;
      }
      else if (value) {
        return false;
      }
      return true;
    }
    return false;
  }

  function handleFocus(event: any) {
    setFocus(true);
    if (onFocus) {
      onFocus(event);
    }
  }

  function handleChange(event: any) {
    if (onChange) {
      onChange(event);
    }
  }

  function handleBlur(event: any) {
    setFocus(false);
    if (onBlur) {
      onBlur(event);
    }
  }

  const isPlaceholder = hasPlaceholder();

    useEffect(() => {
      const textareaElement: any = inputRef['current'];

      if ( ! textareaElement) {
        return void 0;
      }

      function handleInput(event: any) {
        const target = event['target'];
        target.style.height = 'auto';
        target.style.height = target.scrollHeight + 'px'
      }

      textareaElement.classList.add(styles['auto']);
      textareaElement.setAttribute('style', 'height: ' + textareaElement.scrollHeight + 'px');
      textareaElement.addEventListener('input', handleInput);

      return () => {
        textareaElement.removeEventListener('input', handleInput);
      };
    }, []);

  return (
    <div className={inputClassName}>
      <div className={styles['content']}>
        <textarea
          ref={inputRef}
          className={styles['input']}
          name={name}
          value={value}
          disabled={disabled}
          {...props}
          rows={5}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      {isPlaceholder && (
        <div className={styles['placeholder']}>
          <span className={styles['caption']}>{ placeholder }</span>
        </div>
      )}
    </div>
  );
}

export default TextareaDefault;
