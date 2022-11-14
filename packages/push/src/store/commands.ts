
import { UUID } from '@helper/utils';
import { Dispatch } from '@reduxjs/toolkit';

import { pushNotificationAction, closeNotificationAction } from './slice';


export const close = (uuid: string) => (dispatch: Dispatch<any>) => {
  dispatch(closeNotificationAction(uuid));
};

export const push = (data: any) => (dispatch: Dispatch<any>) => {
  data['uuid'] = UUID();
  dispatch(pushNotificationAction(data));
};

export const pushFail = (title: string, content?: string) => (dispatch: Dispatch<any>) => {
  return dispatch(pushNotificationAction({
    title,
    content,
    autoClose: false,
    mode: 'danger',
    uuid: UUID(),
  }));
};

export const pushSuccess = (title: string, content?: string) => (dispatch: Dispatch<any>): any => {
  dispatch(pushNotificationAction({
    title,
    content,
    autoClose: true,
    mode: 'success',
    uuid: UUID(),
  }));
};

