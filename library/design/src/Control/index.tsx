
import React from 'react';

import View from './View';
import Edit from './Edit';
import Delete from './Delete';

import styles from './@media/index.module.scss';


interface IProps {
  onView?(): void;
  onEdit?(): void;
  onDelete?(): void;
  inViewProcess?: boolean;
  inEditProcess?: boolean;
  inDeleteProcess?: boolean;
}


function Control(props: IProps) {
  return (
    <div className={styles['wrapper']}>
      { !! props.onView && (
        <View
          process={props.inViewProcess}
          disabled={props.inEditProcess || props.inDeleteProcess}
          onClick={props.onView}
        />
      )}
      { !! props.onEdit && (
        <Edit
          process={props.inEditProcess}
          disabled={props.inViewProcess || props.inDeleteProcess}
          onClick={props.onEdit}
        />
      )}
      { !! props.onDelete && (
        <Delete
          process={props.inDeleteProcess}
          disabled={props.inViewProcess || props.inEditProcess}
          onClick={props.onDelete}
        />
      )}
    </div>
  );
}

export default React.memo(Control);