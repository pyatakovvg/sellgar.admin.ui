
import ReactDOM from 'react-dom';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { closeStore } from '../store/commands';
import { resetStateAction, selectName, selectIsOpen } from '../store/slice';

import Store from './Store';

import cn from 'classnames';
import styles from './defaults.module.scss';


interface IProps {
  className?: string;
  name: string;
  type?: 'multiple' | 'simple';
  value: Array<string> | string;
  onSubmit(data: any): void;
}


function Dialog({ className, name, type, value, onSubmit }: IProps) {
  const dispatch = useDispatch();
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const isOpen = useSelector(selectIsOpen);
  const actionDialogName = useSelector(selectName);

  function handleCloseDialog() {
    dispatch<any>(closeStore());
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

  const portalElement: any = document.querySelector('#store');

  if ( ! isOpen || (name !== actionDialogName)) {
    return null;
  }
  return ReactDOM.createPortal((
    <div className={styles['wrapper']} data-name={name}>
      <div ref={wrapperRef} className={classNameContent} onClick={handleOutClick} >
        <div className={classNameDialog}>
          <span className={classNameCloseDialog} onClick={handleCloseDialog} />
          <div className={styles['dialog__content']}>
            <Store type={type || 'simple'} value={value} onSubmit={onSubmit} />
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
