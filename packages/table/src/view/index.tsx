
import { Text } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  columns: Array<any>;
  children: any;
}


function Table({ columns, children }: IProps) {
  const gridStyles: string = React.useMemo(() => 'auto / ' + React.Children.map(children, (child: any) => {
    return child['props']['width'] ? (child['props']['width'] + 32) + 'px' : 'auto';
  }).join(' '), [children]);

  return (
    <div className={styles['wrapper']} role={'table'}>
      <div className={styles['content']} style={{
        'grid': gridStyles,
      }}>
        {React.Children.map(children, (child: any) => (
          React.cloneElement(child, { type: 'header' })
        ))}
        {columns.map((item: any) => (
          React.Children.map(children, (child: any) => (
            React.cloneElement<any, any>(child, { data: item })
          ))
        ))}
      </div>
      { ! columns.length && (
        <div className={styles['caption']}>
          <Text type={'strong'}>Нет данных для отображения</Text>
        </div>
      )}
    </div>
  );
}

export default Table;
