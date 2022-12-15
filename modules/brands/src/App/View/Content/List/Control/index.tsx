
import React from 'react';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {
  onEdit?(): void;
  onDelete?(): void;
}


function Control({ onEdit, onDelete }: IProps) {
  return (
    <div className={styles['wrapper']}>
      { !! onEdit && (
        <div className={cn(styles['button'], styles['edit'])} onClick={onEdit}>
          <span className={cn(styles['icon'], 'fa fa-pen')} />
        </div>
      )}
      { !! onDelete && (
        <div className={cn(styles['button'], styles['delete'])} onClick={onDelete}>
          <span className={cn(styles['icon'], 'far fa-trash-alt')} />
        </div>
      )}
    </div>
  );
}

export default React.memo(Control);