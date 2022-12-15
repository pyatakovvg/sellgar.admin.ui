
import React from 'react';
import ReactDOM from 'react-dom';
import { useStore } from 'effector-react';

import Wrapper from './Wrapper';
import Container from './Container';
import { DataDialogProvider } from './context';

import { closeDialog } from '../models/dialog';

import { $dialogStore, $hasOpenDialog, destroyAllDialog } from '../models/dialog';


function DialogProvider() {
  const $dialog = useStore($dialogStore);
  const $hasOpen = useStore($hasOpenDialog);

  // const [isWrapperShow, setWrapperShow] = React.useState(false);
  // const [isDialogShow, setDialogShow] = React.useState(false);
  const [portal, setPortal] = React.useState<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const portalElement = document.querySelector('#dialog') as HTMLDivElement;

    if ( ! portalElement) {
      const body = document.body;
      const portal = document.createElement('div');

      portal.id = 'dialog';
      portal.style.position = 'fixed';
      portal.style.zIndex = '8888';

      body.appendChild(portal);

      setPortal(portal);
    }
    else {
      setPortal(portalElement);
    }
    return () => {
      destroyAllDialog();
    }
  }, []);

  if ( ! portal) {
    return null;
  }

  if ( ! $hasOpen) {
    return null;
  }

  return ReactDOM.createPortal((
    <Wrapper>
      {$dialog.map((dialog) => {
        if ( ! dialog.isOpen) {
          return null;
        }
        return (
          <Container key={dialog.name} onClose={() => closeDialog(dialog.name)}>
            <DataDialogProvider value={dialog?.data ?? null}>
              { React.cloneElement(dialog.component) }
            </DataDialogProvider>
          </Container>
        );
      })}
    </Wrapper>
  ), portal);
}

export default DialogProvider;
