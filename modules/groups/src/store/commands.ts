
import request from "@package/request";

import {
  getGroupRequestAction,
  getGroupRequestFailAction,
  getGroupRequestSuccessAction,

  getGroupsRequestAction,
  getGroupsRequestFailAction,
  getGroupsRequestSuccessAction,

  createGroupRequestAction,
  createGroupRequestFailAction,
  createGroupRequestSuccessAction,

  updateGroupRequestAction,
  updateGroupRequestSuccessAction,
  updateGroupRequestFailAction,
} from './slice';


export const getGroup = (uuid: string) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getGroupRequestAction());

    const result = await request({
      url: '/api/v1/groups',
      method: 'get',
      params: {
        uuid,
      }
    });

    dispatch(getGroupRequestSuccessAction());
    return result['data'][0] || null;
  }
  catch(error: any) {

    dispatch(getGroupRequestFailAction());
    return null;
  }
};

export const getGroups = () => async (dispatch: any): Promise<any> => {
  try {
    dispatch(getGroupsRequestAction());

    const result = await request({
      url: '/api/v1/groups',
      method: 'get',
      params: {
        include: ['category'],
      }
    });

    dispatch(getGroupsRequestSuccessAction(result['data']));
  }
  catch(error: any) {

    dispatch(getGroupsRequestFailAction());
  }
};

export const createGroup = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(createGroupRequestAction());

    const result = await request({
      url: '/api/v1/groups',
      method: 'post',
      data,
    });

    dispatch(createGroupRequestSuccessAction(result['data']));
    return true;
  }
  catch(error: any) {

    dispatch(createGroupRequestFailAction());
    return false;
  }
};

export const updateGroup = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(updateGroupRequestAction());

    const result = await request({
      url: '/api/v1/groups',
      method: 'put',
      data,
    });

    dispatch(updateGroupRequestSuccessAction(result['data']));
    return true;
  }
  catch(error: any) {

    dispatch(updateGroupRequestFailAction());
    return false;
  }
};
