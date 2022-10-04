
import { InputField } from '@library/kit';

import React from 'react';
import { FieldArray } from 'redux-form';

import Attributes from "./Attributes";

import cn from 'classnames';
import styles from './default.module.scss';


interface IModifyFieldProps {
  field: string;
  data: any;
  disabled: boolean;
  onRemove(): void;
}


function ModeField({ field, disabled, onRemove }: IModifyFieldProps) {
  const classNameRemoveAttr = React.useMemo(() => cn(styles['icon'], 'far fa-trash-alt'), []);

  function handleRemove() {
    onRemove && onRemove();
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['block']}>
        <div className={styles['value']}>
          <InputField
            required
            name={`${field}.name`}
            disabled={disabled}
          />
        </div>
        <div className={styles['control']}>
          <span className={classNameRemoveAttr} onClick={() => handleRemove()} />
        </div>
      </div>
      <div className={styles['content']}>
        <FieldArray
          name={field + '.values'}
          validate={[(value) => ! value]}
          // @ts-ignore
          component={Attributes}
          disabled={disabled}
        />
      </div>
    </div>
  );
}

export default ModeField;
