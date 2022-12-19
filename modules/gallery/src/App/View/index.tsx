
import Dialog from '@package/dialog';
import { Header } from '@library/kit';
import { query } from '@helper/utils';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Controls from './Controls';
import Content from './Content';
import ImageView from './ImageView';
import FolderModify from './FolderModify';

import { getFolders } from '../store/commands';

import styles from './default.module.scss';


function Page() {
  const location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const search = query.toObject(location.search);
    dispatch(getFolders(search?.['uuid']));
  }, [location]);

  return (
    <section className={styles['wrapper']}>
      <div className={styles['controls']}>
        <Controls />
      </div>
      <div className={styles['content']}>
        <div className={styles['header']}>
          <Header>Галлерея</Header>
        </div>
        <div className={styles['list']}>
          <Content />
        </div>
      </div>

      <Dialog name={'folder'}>
        <FolderModify />
      </Dialog>

      <Dialog name={'view'}>
        {(data: any) => <ImageView {...data} />}
      </Dialog>
    </section>
  );
}

export default Page;