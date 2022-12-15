
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { logoutProfileFx } from '../../../store';

import cn from 'classnames';
import styles from './default.module.scss';


function Logout() {
  const navigate = useNavigate();

  const iconClassName = React.useMemo(() => cn(styles['icon'], 'fa-solid fa-door-open'), []);

  React.useEffect(() => {
    logoutProfileFx.doneData.watch(() => {
      navigate(process.env['PUBLIC_URL'] + '/sign-in');
    });
  }, [navigate]);

  return (
    <div className={styles['wrapper']} onClick={() => logoutProfileFx()}>
      <span className={iconClassName} />
      <span className={styles['content']}>Выйти из кабинета</span>
    </div>
  );
}

export default React.memo(Logout);
