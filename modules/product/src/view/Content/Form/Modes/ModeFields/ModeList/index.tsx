
import { Text, Draggable, RadioContainer } from '@library/kit';

import React from 'react';
import { change, getFormValues } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';

import Item from './Item';
import Header from './Header';

import styles from './default.module.scss';


function OptionsList({ fields, disabled }: any) {
  const dispatch = useDispatch();
  const values = useSelector(getFormValues('modify'));

  const targetValue = React.useMemo(() => {
    const modes = fields.getAll();
    const index = modes.findIndex((item: any) => item.isTarget);
    if (index < 0) {
      return null;
    }
    return 'modes[' + index + '].isTarget';
  }, [values]);

  function handleChangeTarget(value: string) {
    for (let index in fields.getAll()) {
      dispatch(change('modify', 'modes[' + index + '].isTarget', false));
    }
    dispatch(change('modify', value, true));
  }

  function handleRemoveAttr(index: number) {
    fields.remove(index)
  }

  function handleChangeOrder(from: number, to: number) {
    if (from !== null && to !== null) {
      fields.move(from, to);
    }
  }

  if ( ! fields.length) {
    return (
      <div className={styles['empty']}>
        <Text type={'strong'}>Добавьте комплектацию</Text>
      </div>
    );
  }

  return (
    <div className={styles['attrs']}>
      <div className={styles['header']}>
        <Header />
      </div>
      <div className={styles['content']}>
        <RadioContainer value={targetValue} onChange={handleChangeTarget}>
          <Draggable
            type={'list'}
            // @ts-ignore
            onChange={(from: number, to: number) => handleChangeOrder(from, to)}
          >
            {fields.map((field: any, index: number) => {
              return (
                <Item
                  key={index}
                  field={field}
                  disabled={disabled}
                  onRemove={() => handleRemoveAttr(index)}
                />
              )
            })}
          </Draggable>
        </RadioContainer>
      </div>
    </div>
  );
}

export default OptionsList;
