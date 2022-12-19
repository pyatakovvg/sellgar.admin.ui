
import request from "@package/request";

import {
  getOrderRequestAction,
  getOrderRequestFailAction,
  getOrderRequestSuccessAction,
} from './slice';


export function getOrder(uuid: string): any {
  return async function (dispatch: any) {
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
}
