
import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  children: React.ReactHTMLElement<any>
}


function EmptyWrapper({ children }: IProps): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      {React.Children.map(children, (child: React.ReactHTMLElement<any>) => (
        React.cloneElement(child)
      ))}
    </div>
  );
}

export default EmptyWrapper;
