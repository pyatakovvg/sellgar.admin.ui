
import { InputField, Checkbox } from '@library/kit';

import React from 'react';

import Product from './Product';

import cn from 'classnames';
import styles from './default.module.scss';


interface IModifyFieldProps {
  field: string;
  data: any;
  disabled: boolean;
  onChange(): void;
  onRemove(): void;
}


function ModeField({ field, data, disabled, onChange, onRemove }: IModifyFieldProps) {
  const classNameRemoveAttr = React.useMemo(() => cn(styles['icon'], 'far fa-trash-alt'), []);

  function handleRemove() {
    onRemove && onRemove();
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['block']}>
        <div className={styles['target']}>
          <Checkbox value={data['isTarget']} onChange={onChange} />
        </div>
        <div className={styles['label']}>
          <InputField
            name={`${field}.label`}
            placeholder={'Метка'}
            disabled={disabled}
          />
        </div>
        <div className={styles['product']}>
          <Product uuid={data['productUuid']} />
        </div>
        <div className={styles['control']}>
          <span className={classNameRemoveAttr} onClick={() => handleRemove()} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(ModeField);
