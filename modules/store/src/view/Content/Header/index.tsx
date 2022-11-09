
import {Header} from "@library/kit";
import {nounDeclension} from "@helper/utils";

import React from 'react';
import { useSelector } from 'react-redux';

import { selectMeta } from '../../../store/slice';


function Controls() {
  const meta = useSelector(selectMeta);

  return (
    <Header level={3}>Найдено { meta['totalRows'] } { nounDeclension(meta['totalRows'], ['товар', 'товара', 'товаров']) }</Header>
  );
}

export default Controls;
