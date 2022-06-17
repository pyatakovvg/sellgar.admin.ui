
import request from "@package/request";

import {
  getUnitRequestAction,
  getUnitRequestFailAction,
  getUnitRequestSuccessAction,

  getUnitsRequestAction,
  getUnitsRequestFailAction,
  getUnitsRequestSuccessAction,

  createUnitRequest,
  createUnitRequestFail,
  createUnitRequestSuccess,

  updateUnitRequest,
  updateUnitRequestFail,
  updateUnitRequestSuccess,
} from './slice';


interface IUnit {
  uuid?: string;
  name: string;
  description: string;
  order?: number;
}


export const getUnit = (uuid: string) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getUnitRequestAction());

    const result = await request({
      url: '/api/v1/units',
      method: 'get',
      params: {
        uuid,
      }
    });

    dispatch(getUnitRequestSuccessAction());

    return result['data'][0] || null;
  }
  catch(error: any) {

    dispatch(getUnitRequestFailAction());

    return null;
  }
};

export const getUnits = () => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getUnitsRequestAction());

    const result = await request({
      url: '/api/v1/units',
      method: 'get',
    });

    dispatch(getUnitsRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(getUnitsRequestFailAction());
  }
};

export const createUnit = (data: IUnit) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(createUnitRequest());

    const result = await request({
      url: '/api/v1/units',
      method: 'post',
      data,
    });

    dispatch(createUnitRequestSuccess(result['data']));
    return true;
  }
  catch(error: any) {

    dispatch(createUnitRequestFail());
    return false;
  }
};

export const updateUnits = (data: IUnit) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(updateUnitRequest());

    const result = await request({
      url: '/api/v1/units',
      method: 'put',
      data,
    });

    dispatch(updateUnitRequestSuccess(result['data']));
    return true;
  }
  catch(error: any) {

    dispatch(updateUnitRequestFail());
    return false;
  }
};
