
import { SelectField, InputField, Text } from '@library/kit';

import React from 'react';
import { useSelector } from "react-redux";

import { selectAttributes } from "../../../../../../../../../../store/slice";

import cn from 'classnames';
import styles from './default.module.scss';


interface IModifyFieldProps {
  field: string;
  data: any;
  disabled: boolean;
  onRemove(): void;
}


function Item({ field, data, disabled, onRemove }: IModifyFieldProps) {
  const attributes = useSelector(selectAttributes);

  const attribute = React.useMemo(() => attributes.find((item) => item['uuid'] === data['attributeUuid']), [data]);
  const classNameRemoveAttr = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-xmark'), []);

  function handleRemove() {
    onRemove && onRemove();
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['name']}>
        <SelectField
          required
          simple
          clearable={false}
          name={`${field}.attributeUuid`}
          options={attributes}
          optionKey="uuid"
          optionValue="name"
          disabled={disabled || ! attributes.length}
        />
      </div>
      <div className={styles['value']}>
        <InputField
          required
          name={`${field}.value`}
          disabled={disabled}
        />
      </div>
      <div className={styles['unit']}>
        <Text>{ attribute?.['unit']?.['name'] ?? '---' }</Text>
      </div>
      <div className={styles['control']}>
        <span className={classNameRemoveAttr} onClick={() => handleRemove()} />
      </div>
    </div>
  );
}

export default Item;
