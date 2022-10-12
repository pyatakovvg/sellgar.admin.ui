
import React from 'react';

import styles from './@media/index.module.scss';


interface IData {
  [key: string]: any;
}

interface IProps {
  data: IData;
  alias?: string | null;
  width: number | 'auto';
  children?: any;
}


function Row({ width, children }: any) {
  return (
    <td width={width}>
      <div className={styles['col']}>
        <div className={styles['content']}>
          { children }
        </div>
      </div>
    </td>
  );
}


function Content({ width, alias, data, children }: IProps) {
  const rowData = React.useMemo(() => {
    return alias ? data[alias] : data;
  }, [alias, data]);

  if (children) {
    if (children instanceof Function) {
      const child = children.call(null, data) || null;
      return (
        <Row width={width}>
          { child }
        </Row>
      );
    }

    return (
      <Row width={width}>
        {React.Children.map(children, (child: any) => {
          return React.cloneElement(child, { ...data });
        })}
      </Row>
    );
  }

  return (
    <Row>
      { rowData }
    </Row>
  );
}

export default Content;
