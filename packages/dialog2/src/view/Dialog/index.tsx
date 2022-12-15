
import React from 'react';
import { useStore } from 'effector-react';

import { $dialogStore, createDialog } from '../../models/dialog';


interface IProps {
  name: string;
  children: any;
}


function Dialog({ name, children }: IProps) {
  React.useEffect(() => {
    createDialog({
      name,
      isOpen: false,
      component: children,
    });
  }, []);

  return null;
}

export default Dialog;
