
import { query } from '@helper/utils';

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Prev from './Prev';
import Items from './Items';
import Next from './Next';

import styles from './default.module.scss';


interface IProps {
  totalRows: number;
}


function Paging({ totalRows }: IProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const search = query.toObject(location['search']);

  const pages = React.useMemo(() => {
    const pagesNumber = Math.ceil(totalRows / Number(process.env['REACT_APP_TAKE_ROWS']));
    return [...Array(pagesNumber).keys()];
  }, [totalRows]);

  function handleChange(page: number) {
    navigate(query.toQuery({
      ...search,
      page,
    }));
  }

  if (pages.length <= 1) {
    return null;
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['prev']}>
        <Prev page={Number(search?.['page'] ?? 1)} onChange={handleChange} />
      </div>
      <div className={styles['content']}>
        <Items page={search?.['page'] ?? 1} pages={pages} onChange={handleChange} />
      </div>
      <div className={styles['prev']}>
        <Next page={Number(search?.['page'] ?? 1)} pages={pages.length} onChange={handleChange} />
      </div>
    </div>
  );
}

Paging.defaultProps = {
  totalRows: 0,
};

export default Paging;
