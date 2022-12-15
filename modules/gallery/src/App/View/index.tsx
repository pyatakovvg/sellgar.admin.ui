
import Dialog from '@package/dialog';
import { query } from '@helper/utils';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Header from './Header';
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
      <div className={styles['header']}>
        <Header />
      </div>
      <div className={styles['content']}>
        <Content />
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