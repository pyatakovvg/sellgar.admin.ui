
import { createStore } from 'effector';

import {
  addUsersEvent,
  updateUserEvent,
  deleteUserEvent,

  processEvent,
} from './events';


export const usersStore = createStore<IUser[]>([]);
export const processStore = createStore<boolean>(false);


usersStore
  .on(addUsersEvent, (state, payload) => payload)
  .on(updateUserEvent, (state, payload) => state.map((user) => {
    if (user['uuid'] === payload['uuid']) {
      return {
        ...user,
        ...payload,
      }
    }
    return user;
  }))
  .on(deleteUserEvent, (state, payload) => {
    return state.filter((user) => user['uuid'] !== payload['uuid'])
  });

processStore
  .on(processEvent, (state, payload) => payload);
