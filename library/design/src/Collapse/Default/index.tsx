
import { Header } from '@library/kit';

import React from 'react';

import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  title: string;
  active?: boolean;
  children: any;
  onClick?(): void;
}


function Default({ title, active, children, onClick }: IProps): JSX.Element {
  const [isOpen, setOpen] = React.useState<boolean>(true);

  const wrapperClassName = React.useMemo(() => cn(styles['wrapper'], {
    [styles['active']]: active,
  }), [active]);
  const arrowClassName = React.useMemo(() => cn(styles['icon'], {
    'fa-solid fa-caret-down': isOpen,
    'fa-solid fa-caret-left': ! isOpen,
  }), [isOpen]);

  function handleClick() {
    setOpen( ! isOpen);

    if (onClick) {
      onClick();
    }
  }

  return (
    <div className={wrapperClassName}>
      <div className={styles['header']} onClick={handleClick}>
        <div className={styles['title']}>
          <Header level={6}>{ title }</Header>
        </div>
        <div className={styles['arrow']}>
          <span className={arrowClassName} />
        </div>
      </div>
      {isOpen && (
        <div className={styles['content']}>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child);
          })}
        </div>
      )}
    </div>
  );
}

Default.defaultProps = {
  type: 'default',
  title: 'Collapse title',
  active: false,
  children: null,
};

export default Default;
