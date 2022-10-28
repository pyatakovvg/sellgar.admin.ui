
import request from "@package/request";

import {
  getCommentsRequestAction,
  getCommentsRequestFailAction,
  getCommentsRequestSuccessAction,
} from './slice';


export const getComments = (search: any, options: any): any => async (dispatch: any) => {
  try {
    dispatch(getCommentsRequestAction());

    const result = await request({
      url: '/api/v1/comments/products',
      method: 'get',
      cancelToken: options['cancel']['token'],
      params: {
        ...search,
        take: Number(process.env['REACT_APP_TAKE_ROWS']),
        skip: (Number(search['page'] ?? 1) - 1) * Number(process.env['REACT_APP_TAKE_ROWS']),
      },
    });

    dispatch(getCommentsRequestSuccessAction(result));
  }
  catch(error: any) {

    dispatch(getCommentsRequestFailAction());
  }
};
