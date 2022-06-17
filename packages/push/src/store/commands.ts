
import { UUID } from '@helper/utils';

import { pushNotificationAction, closeNotificationAction } from './slice';


export const close = (uuid: string) => (dispatch: any) => {
  dispatch(closeNotificationAction(uuid));
};

export const push = (data: any) => (dispatch: any) => {
  data['uuid'] = UUID();
  dispatch(pushNotificationAction(data));
};

export const pushFail = (title: string, content?: string) => (dispatch: any) => {
  dispatch(pushNotificationAction({
    title,
    content,
    autoClose: false,
    mode: 'danger',
    uuid: UUID(),
  }));
};

export const pushSuccess = (title: string, content?: string) => (dispatch: any) => {
  dispatch(pushNotificationAction({
    title,
    content,
    autoClose: true,
    mode: 'success',
    uuid: UUID(),
  }));
};

