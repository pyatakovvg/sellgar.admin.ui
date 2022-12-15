
import React from 'react';

import Menu from './Menu';
import Wrapper from '../Default';

import styles from './@media/index.module.scss';


interface IProps {
  navigate: Array<any>;
  children: any;
}

interface IContentProps {
  navigate?: Array<any>;
  children: any;
}


function Content({ navigate, children }: IContentProps) {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['aside']}>
        <Menu items={navigate || []} />
      </div>
      <div className={styles['content']}>
        { children }
      </div>
    </div>
  );
}

function CompositeWrapper({ navigate, children }: IProps) {
  return (
    <Wrapper navigate={navigate}>
      <Content>
        { children }
      </Content>
    </Wrapper>
  );
}

export default CompositeWrapper;
