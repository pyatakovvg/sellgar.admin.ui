
import React from 'react';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';

import cn from 'classnames';
import styles from './default.module.scss';


const Handle = SortableHandle(function() {
  return (
    <div className={styles['handle']}>
      <span className={cn(styles['icon'], "fas fa-grip-vertical")} />
    </div>
  );
});

const SortableItem = SortableElement(function({ value }: any) {
  return (
    <div className={styles['wrapper']}>
      <Handle />
      <div className={styles['content']}>
        {React.cloneElement(value)}
      </div>
    </div>
  );
});

const SortableList = SortableContainer(function({ items }: any) {
  return (
    <div className={styles['container']}>
      {items.map((child: JSX.Element, index: number) => {
        return (
          // @ts-ignore
          <SortableItem key={`item-${index}`} index={index} value={child} />
        );
      })}
    </div>
  );
});

interface IDraggableProps {
  children: any;
  onChange(oldIndex: number, newIndex: number): void;
}

function Draggable({ children, onChange }: IDraggableProps) {
  function handleSortEnd({ oldIndex, newIndex }: any) {
    onChange(oldIndex, newIndex);
  }

  return <SortableList
    helperClass={styles['helper']}
    lockAxis="y"
    // @ts-ignore
    items={React.Children.toArray(children)}
    useDragHandle
    onSortEnd={handleSortEnd}
  />;
}

export default Draggable;
