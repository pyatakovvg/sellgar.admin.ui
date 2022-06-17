
import Dialog from '@package/dialog';
import { Header, Button } from '@library/kit';

import React from 'react';
import { useDispatch } from 'react-redux';

import View from './View';
import Content from './Content';

import { getImages, uploadImages, resetStateAction } from '../index';

import styles from './default.module.scss';


function Users(): JSX.Element {
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function init() {
      await dispatch<any>(getImages());
    }
    init();
    return () => {
      dispatch(resetStateAction());
    }
  }, []);

  function handleAdd(event: any) {
    event.preventDefault();

    const fileInput = document.createElement('input');
    fileInput.addEventListener("change", async (e: any) => {
      const fileList = e['target'].files
      await dispatch<any>(uploadImages(fileList));
    }, false);
    fileInput.type = 'file';
    fileInput.multiple = true;
    fileInput.click();
  }

  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <Header level={2}>Галлерея</Header>
        <Button onClick={handleAdd}>Добавить</Button>
      </header>
      <section className={styles['content']}>
        <Content />
      </section>

      <Dialog name={'view'}>
        <View />
      </Dialog>
    </section>
  );
}

export default Users;