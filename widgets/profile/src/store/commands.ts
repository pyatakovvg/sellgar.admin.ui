
import request from "@package/request";

import { events } from '../index';

import {
  resetStateAction,

  signInRequestAction,
  signInRequestFailAction,
  signInRequestSuccessAction,

  getProfileRequestAction,
  getProfileRequestFailAction,
  getProfileRequestSuccessAction,

  signOutRequestAction,
  signOutRequestFailAction,
  signOutRequestSuccessAction,
} from './slice';


export const getProfile = (isSilent = false) => async (dispatch: any) => {
  try {
    dispatch(getProfileRequestAction());

    const result = await request({
      url: '/api/v1/users/current',
      method: 'get',
    });

    dispatch(getProfileRequestSuccessAction(result['data']));

    if ( ! isSilent) {
      events.emit('auth', result['data']);
    }

    return true;
  }
  catch(error: any) {

    dispatch(getProfileRequestFailAction());

    if (error['status'] === 401) {
      if ( ! isSilent) {
        events.emit('not-auth', error);
      }
    }
    else {
      events.emit('error', error);
    }

    return false;
  }
};

export const signIn = (formData: any) => async (dispatch: any) => {
  try {
    dispatch(signInRequestAction());

    await request({
      url: '/api/v1/users/current/authorize',
      method: 'post',
      data: {
        login: formData['login'].trim(),
        password: String(formData['password']).trim(),
      }
    });

    dispatch(signInRequestSuccessAction());

    return await dispatch(getProfile(true));
  }
  catch(error) {

    dispatch(signInRequestFailAction());

    return false;
  }
};

export const signOut = () => async (dispatch: any) => {
  try {
    dispatch(signOutRequestAction());

    await request({
      url: '/sign-out',
      method: 'post',
      data: {},
    });

    dispatch(signOutRequestSuccessAction());
    dispatch(resetStateAction());

    return true;
  }
  catch(error) {

    dispatch(signOutRequestFailAction());

    return false;
  }
};
