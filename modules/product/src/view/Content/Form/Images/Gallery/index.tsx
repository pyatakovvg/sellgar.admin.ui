
import { Button } from '@library/kit';
import { closeDialog } from '@package/dialog';

import React from 'react';
import { getFormValues, change } from "redux-form";
import { useDispatch, useSelector } from 'react-redux';

import Item from './Item';

import { selectGallery, getGallery } from '../../../../../index';

import styles from './default.module.scss';


function getComposeArray(gallery: Array<any>, newImage: any) {
  let images = [...(gallery || [])];
  const index = images.findIndex((image) => image['uuid'] === newImage['uuid'])
  if (index > -1) {
    images = [
      ...images.slice(0, index),
      ...images.slice(index + 1),
    ];
  }
  else {
    images.push({
      uuid: newImage['uuid'],
      new: true,
    });
  }
  return images;
}

function Gallery() {
  const dispatch = useDispatch();
  const formData: any = useSelector(getFormValues('modify'));

  const data = useSelector(selectGallery);
  const [images, setImages] = React.useState(formData['gallery']);

  function handleChange(data: any) {
    setImages(getComposeArray(images,data));
  }

  function handleSubmit() {
    dispatch(change('modify', 'gallery', images));
    dispatch<any>(closeDialog());
  }

  React.useEffect(() => {
    dispatch<any>(getGallery());
  }, []);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        {data.map((item) => (
          <div key={item['uuid']} className={styles['image']}>
            <Item isSelected={images.some((img: any) => item['uuid'] === img['uuid'])} {...item} onChange={handleChange} />
          </div>
        ))}
      </div>
      <div className={styles['control']}>
        <Button onClick={handleSubmit}>Выбрать</Button>
      </div>
    </div>
  );
}

export default Gallery;
