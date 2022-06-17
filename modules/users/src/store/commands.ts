
import request from "@package/request";

import {
  getUsersRequestAction,
  getUsersRequestFailAction,
  getUsersRequestSuccessAction,
} from './slice';


export const getUsers = () => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getUsersRequestAction());

    const result = await request({
      url: '/api/v1/users',
      method: 'get',
    });

    dispatch(getUsersRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(getUsersRequestFailAction());
  }
};
