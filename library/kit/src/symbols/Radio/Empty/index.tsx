
import React from 'react';

import Context from '../context';


interface IProps {
  className?: string;
  value?: any | null;
  disabled?: boolean;
  children: any;
}

function EmptyElement({ value, disabled, children }: IProps) {
  const context = React.useContext<any>(Context);
  const isActive = React.useMemo(() => value === context['value'], [context]);

  function handleClick() {
    if (value === context['value']) {
      return void 0;
    }
    context.onChange(value);
  }

  if (children instanceof Function) {
    return children.call(null, { isActive, value, disabled, onClick: handleClick });
  }

  return React.cloneElement(children, { isActive, value, disabled, onClick: handleClick });
}

export default EmptyElement;
