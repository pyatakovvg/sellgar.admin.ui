
import { createSlice } from '@reduxjs/toolkit';


interface IState {
  data: Array<any>;
}


const REDUCER_NAME = 'package/push';

const initialState: IState = {
  data: [],
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state) {
      state['data'] = [];
    },

    closeNotificationAction(state, { payload }) {
      const index = state['data'].findIndex(item => item['uuid'] === payload);

      state['data'] = [
        ...state['data'].slice(0, index),
        ...state['data'].slice(index + 1),
      ];
    },

    pushNotificationAction(state, { payload }) {
      state['data'] = [
        ...state['data'],
        payload
      ]
    },
  },
});

export const {
  resetStateAction,

  pushNotificationAction,
  closeNotificationAction,
} = slice['actions'];

export const selectNotifications = (state: any): Array<any> => state[REDUCER_NAME]['data'];

export const name = slice['name'];
export const reducer = slice['reducer'];
