
import request from '@package/request';

import { createStore, createEvent, createEffect } from 'effector';


export const isInitStore = createStore<boolean>(false);
export const profileStore = createStore<IProfile>({
  role: '',
  permissions: [],
});


export const setInitStore = createEvent<boolean>();


export const getProfileFx = createEffect<() => Promise<IProfile>>(async function() {
  const result = await request({
    url: '/api/v1/users/current',
    method: 'get',
  });
  return result.data;
});

export const logoutProfileFx = createEffect<() => Promise<any>>(async function() {
  const result = await request({
    url: '/api/v1/users/current/logout',
    method: 'post',
  });
  return result.data;
});


isInitStore.on(setInitStore, (_, value) => value);
profileStore
  .on(getProfileFx.doneData, (state, value) => ({ ...state, ...value }))
  .on(logoutProfileFx.doneData, () => ({
    role: '',
    permissions: [],
  }))
