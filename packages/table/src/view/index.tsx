
import { Text } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  columns: Array<any>;
  children: any;
}


function Table({ columns, children }: IProps) {
  return (
    <table className={styles['wrapper']} role={'table'}>
      { ! columns.length && (
        <caption className={styles['caption']}>
          <Text type={'strong'}>Нет данных для отображения</Text>
        </caption>
      )}
      <thead>
        <tr>
          {React.Children.map(children, (child: any) => {
            return React.cloneElement(child, { type: 'header' });
          })}
        </tr>
      </thead>
      {columns.map((item: any, index: number) => (
        <tbody key={index}>
          <tr>
            {React.Children.map(children, (child: any) => {
              return React.cloneElement<any, any>(child, { data: item });
            })}
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default Table;
