
import { context } from "@library/app";

import React from 'react';
import { useLocation } from 'react-router-dom';

import Menu from './Menu';
import Header from './Header';

import styles from './@media/index.module.scss';


interface IProps {
  children: any,
}


function NavigateWrapper({ children }: IProps): JSX.Element {
  const location = useLocation();
  const { config } = React.useContext(context);

  const subMenu = React.useMemo(() => {
    const path = location['pathname'];
    const navigate = config['navigate'].find((item: any) => {
      const pathLevel = item['path'].replace(/^\/|\/$/, '').split('/')[0];
      const levelReqExp = new RegExp('^' + pathLevel, 'i');
      const pathNormalized = path.replace(/^\/|\/$/, '');
      return levelReqExp.test(pathNormalized);
    });
    return navigate?.['navigate'] ?? [];
  }, [location]);

  return (
    <div className={styles['wrapper']}>
      <header className={styles['header']}>
        <Header />
      </header>
      <section className={styles['content']}>
        <aside className={styles['aside']}>
          <Menu items={config['navigate']} />
        </aside>
        <div id={'scroll'} className={styles['module']}>
          {React.Children.map(children, (child: any) => (
            React.cloneElement(child, {
              navigate: subMenu,
            } as any)
          ))}
        </div>
      </section>
    </div>
  );
}

export default NavigateWrapper;
