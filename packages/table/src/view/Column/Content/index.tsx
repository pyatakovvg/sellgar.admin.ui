
import React from 'react';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IData {
  [key: string]: any;
}

interface IProps {
  data: IData;
  alias?: string | null;
  width: number | 'auto';
  align?: 'right' | 'left' | 'center';
  children?: any;
}


function Row({ children , align}: any) {
  const colClassName = React.useMemo(() => cn(styles['wrapper'], {
    [styles['align--left']]: align === 'left',
    [styles['align--right']]: align === 'right',
  }), []);

  return (
    <div className={colClassName}>
      <div className={styles['content']}>
        { children }
      </div>
    </div>
  );
}


function Content({ width, alias, align, data, children }: IProps) {
  const rowData = React.useMemo(() => {
    return alias ? data[alias] : data;
  }, [alias, data]);

  if (children) {
    if (children instanceof Function) {
      const child = children.call(null, data) || null;
      return (
        <Row align={align} width={width === 'auto' ? width : width + 32}>
          { child }
        </Row>
      );
    }

    return (
      <Row align={align} width={width}>
        {React.Children.map(children, (child: any) => {
          return React.cloneElement(child, { ...data });
        })}
      </Row>
    );
  }

  return (
    <Row align={align}>
      { rowData }
    </Row>
  );
}

export default Content;
