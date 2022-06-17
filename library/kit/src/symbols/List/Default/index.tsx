
import React from 'react';

import Option from "./Option";

import cn from 'classnames';
import styles from './default.module.scss';


type TOption = {
  [key: string]: any;
};

interface IProps {
  className?: string;
  value: any;
  options: Array<TOption>;
  optionKey?: string;
  optionValue?: string;
  disabled?: boolean;
  onClick?(value: any): void;
}


function ListDefault({ className, value, options, optionKey = 'id', optionValue = 'value', disabled, onClick }: IProps): JSX.Element | null {
  const wrapperClassName = React.useMemo(() => cn(styles['wrapper'], className), [className]);

  function handleClick(value: any) {
    if (disabled) {
      return void 0;
    }
    if (onClick) {
      onClick(value);
    }
  }

  return (
    <div className={wrapperClassName}>
      <div className={styles['content']}>
        {options.map((option: TOption) => (
          <Option key={option[optionKey]} isSelect={value === option[optionKey]} value={option[optionValue]} onClick={() => handleClick(option[optionKey])} />
        ))}
      </div>
    </div>
  );
}

ListDefault.defaultProps = {
  className: null,
  value: null,
  options: [],
  optionKey: 'id',
  optionValue: 'value',
  disabled: false,
};

export default ListDefault;
