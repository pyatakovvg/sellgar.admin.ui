
import React from 'react';

import DefaultWrapper from './Default';
import CompositeWrapper from './Composite';


interface IProps {
  type: 'default' | 'composite' | undefined;
  children: any;
  navigate: INavigate[];
}


function Factory({ type, children, navigate }: IProps) {
  switch(type) {
    case 'default': return (
      <DefaultWrapper navigate={navigate}>
        { children }
      </DefaultWrapper>
    );
    case 'composite': return (
      <CompositeWrapper navigate={navigate}>
        { children }
      </CompositeWrapper>
    );
    default: return children;
  }
}

export default React.memo(Factory);
