
import React from 'react';
import { useLocation } from 'react-router-dom';

import Menu from './Menu';
import Header from './Header';
import Profile from './Profile';
import Logout from './Logout';

import styles from './@media/index.module.scss';


interface IProps {
  navigate: INavigate[];
  children: any;
}


function NavigateWrapper(props: IProps) {
  const location = useLocation();

  const subMenu = React.useMemo(() => {
    const path = location['pathname'];
    const navigate = props.navigate.find((item: any) => {
      const pathLevel = item['path'].replace(/^\/|\/$/, '').split('/')[0];
      const levelReqExp = new RegExp('^' + pathLevel, 'i');
      const pathNormalized = path.replace(/^\/|\/$/, '');
      return levelReqExp.test(pathNormalized);
    });
    return navigate?.['navigate'] ?? [];
  }, [location, props.navigate]);

  return (
    <div className={styles['wrapper']}>
      <aside className={styles['aside']}>
        <header className={styles['header']}>
          <Header />
        </header>
        <div className={styles['profile']}>
          <Profile />
        </div>
        <menu className={styles['menu']}>
          <Menu items={props.navigate} />
        </menu>
        <div className={styles['logout']}>
          <Logout />
        </div>
      </aside>
      <section className={styles['content']}>
        <div className={styles['module']}>
          {React.Children.map(props.children, (child) => (
            React.cloneElement(child, {
              navigate: subMenu,
            })
          ))}
        </div>
      </section>
    </div>
  );
}

export default NavigateWrapper;
