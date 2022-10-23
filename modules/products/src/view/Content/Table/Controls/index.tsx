
import { Checkbox, Text } from '@library/kit';

import React from 'react';
import { useDispatch } from "react-redux";

import {updateProduct} from "../../../../store/commands";

import styles from './default.module.scss';


interface IProps {
  uuid?: string;
  isUse?: boolean;
}


function Controls({ uuid, isUse }: IProps) {
  const dispatch = useDispatch();

  function handleStatusChange(status: boolean) {
    dispatch<any>(updateProduct({ uuid, isUse: status }))
  }

  return (
    <div className={styles['available']}>
      <div className={styles['row']}>
        <Checkbox value={isUse || false} onChange={handleStatusChange}><Text>на витрине</Text></Checkbox>
      </div>
    </div>
  );
}

export default Controls;