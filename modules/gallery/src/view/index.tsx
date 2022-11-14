
import Dialog from '@package/dialog';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Header from './Header';
import Content from './Content';
import ImageView from './ImageView';
import FolderModify from './FolderModify';

import { getFolders } from '../store/commands';
import { resetStateAction } from '../store/slice';

import styles from './default.module.scss';


function Page() {
  const params = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    (async function init() {
      await dispatch(getFolders(params?.['uuid']));
    })();
  }, [params]);

  React.useEffect(() => {
    return () => {
      dispatch(resetStateAction());
    };
  }, []);

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