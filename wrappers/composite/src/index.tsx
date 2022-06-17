
import Wrapper from '@wrapper/default';

import React from 'react';

import Menu from './Menu';

import styles from './@media/index.module.scss';


interface IProps {
  children: JSX.Element;
}

interface IContentProps {
  navigate?: Array<any>;
  children: JSX.Element;
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

function CompositeWrapper({ children }: IProps): JSX.Element {
  return (
    <Wrapper>
      <Content>
        { children }
      </Content>
    </Wrapper>
  );
}

export default CompositeWrapper;
