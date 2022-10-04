
import React from 'react';

import Select from './Select';
import List from '../../List';

import styles from './default.module.scss';


type TMode = 'default' | 'primary' | 'danger' | 'success';
type TOption = {
  [key: string]: any;
};

interface IProps {
  className?: string;
  mode?: TMode;
  value?: any | null;
  options: Array<TOption>,
  optionKey?: string;
  optionValue?: string;
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  onChange?(value: any): void;
  onFocus?(): void;
  onBlur?(): void;
}


function useFoundOptionByKey(value: any, options: Array<any>, optionKey: string = ''): Array<any> | null {
  return React.useMemo(() => options.find((option) => option[optionKey] === value) || null, [value, options]);
}

function useGetValue(value: string, option: any, optionValue: string = ''): string | null {
  return React.useMemo(() => option?.[optionValue] || null, [value, option]);
}


function DefaultSelect({ mode, value, options, optionKey, optionValue, placeholder, disabled, clearable, onFocus, onChange, onBlur }: IProps): JSX.Element | null {
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const [isFocus, setFocus] = React.useState(false);

  function handleFocus() {
    if (isFocus) {
      handleBlur();
    }
    else {
      setFocus(true);
      if (onFocus) {
        onFocus();
      }
    }
  }

  function handleChange(value: any) {
    setFocus(false);
    if (onChange) {
      onChange(value);
      handleBlur();
    }
  }

  function handleBlur() {
    setFocus(false);
    if (onBlur) {
      onBlur();
    }
  }

  function handleReset() {
    handleChange(null);
  }

  React.useEffect(() => {
    function handleReset(event: any) {
      if (  ! isFocus) {
        return void 0;
      }
      const element = wrapperRef['current'];
      if (element) {
        if ( ! element.contains(event['target'])) {
          handleBlur();
        }
      }
    }
    document.addEventListener('click', handleReset);
    return () => {
      document.removeEventListener('click', handleReset);
    };
  }, [isFocus]);

  const selectedOption = useFoundOptionByKey(value, options, optionKey);
  const selectedValue = useGetValue(value, selectedOption, optionValue);

  return (
    <div ref={wrapperRef} className={styles['wrapper']}>
      <Select
        mode={mode}
        value={selectedValue}
        placeholder={placeholder}
        disabled={disabled}
        clearable={clearable}
        inFocus={isFocus}
        onClick={handleFocus}
        onReset={handleReset}
      />
      {isFocus && (
        <div className={styles['list']}>
          <List
            className={styles['shadow']}
            value={value}
            options={options}
            optionKey={optionKey}
            optionValue={optionValue}
            onClick={handleChange}
          />
        </div>
      )}
    </div>
  );
}

DefaultSelect.defaultProps = {
  className: null,
  mode: 'default',
  options: [],
  optionKey: 'id',
  optionValue: 'value',
  value: null,
  placeholder: 'Select value',
  clearable: false,
  disabled: false,
};

export default DefaultSelect;
