
import Dialog from '@package/dialog';
import { Header } from '@library/kit';

import React from 'react';
import { useSelector } from 'react-redux';
import { Field, getFormSyncErrors } from 'redux-form';

import Form from './Form';
import Gallery from './Gallery';

import cn from 'classnames';
import styles from './default.module.scss';


function Images() {
  const errors = useSelector(getFormSyncErrors('modify'));
  const contentClassName = React.useMemo(() => cn(styles['content'], {
    [styles['error']]: !! errors['gallery'],
  }), [errors]);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Header level={4}>Изображения</Header>
      </div>
      <div className={contentClassName}>
        <Field name="gallery" component={Form} />
      </div>

      <Dialog name={'gallery'}>
        <Gallery />
      </Dialog>
    </div>
  );
}

export default Images;
