
import request from "@package/request";

import {
  getOrderRequestAction,
  getOrderRequestFailAction,
  getOrderRequestSuccessAction,
} from './slice';


export const getOrder = (uuid: string) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getOrderRequestAction());

    const result = await request({
      url: '/api/v1/checkouts/' + uuid,
      method: 'get',
    });

    dispatch(getOrderRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(getOrderRequestFailAction());
  }
};
