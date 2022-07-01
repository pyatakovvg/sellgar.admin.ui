
import request from "@package/request";

import {
  getCommentsRequestAction,
  getCommentsRequestFailAction,
  getCommentsRequestSuccessAction,
} from './slice';


export const getComments = () => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getCommentsRequestAction());

    const result = await request({
      url: '/api/v1/comments',
      method: 'get',
    });

    dispatch(getCommentsRequestSuccessAction(result));
  }
  catch(error: any) {

    dispatch(getCommentsRequestFailAction());
  }
};
