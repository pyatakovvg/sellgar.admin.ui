
import ReactDOM from 'react-dom';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { closeDialog } from '../store/commands';
import { resetStateAction, selectName, selectData, selectIsOpen } from '../store/slice';

import cn from 'classnames';
import styles from './defaults.module.scss';


interface IProps {
  className?: string;
  name: string;
  children: any;
  onClose?(): void;
}


function Dialog({ className, name, children, onClose }: IProps) {
  const dispatch = useDispatch();
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const data = useSelector(selectData);
  const isOpen = useSelector(selectIsOpen);
  const actionDialogName = useSelector(selectName);

  function handleCloseDialog() {
    dispatch<any>(closeDialog());
    if (onClose) {
      onClose();
    }
  }

  function handleOutClick(event: any) {
    const { current: wrapperElement } = wrapperRef;
    const target = event.target;

    if (wrapperElement === target) {
      handleCloseDialog();
    }
  }

  useEffect(() => {
    return () => {
      dispatch(resetStateAction());
    };
  }, []);

  const classNameCloseDialog = cn(styles['dialog__close'], 'fa-solid fa-xmark');
  const classNameDialog = cn(styles['dialog'], className || '');
  const classNameContent = cn(styles['wrapper__content']);

  const portalElement: any = document.querySelector('#dialog');

  if ( ! isOpen || (name !== actionDialogName)) {
    return null;
  }
  return ReactDOM.createPortal((
    <div className={styles['wrapper']}>
      <div ref={wrapperRef} className={classNameContent} onClick={handleOutClick} >
        <div className={classNameDialog}>
          <span className={classNameCloseDialog} onClick={handleCloseDialog} />
          <div className={styles['dialog__content']}>
            { React.cloneElement<any, any>(children, { data }) }
          </div>
        </div>
      </div>
    </div>
  ), portalElement);
}

Dialog.defaultProps = {
  className: null,
  name: null,
  children: null,
};

export default Dialog;
