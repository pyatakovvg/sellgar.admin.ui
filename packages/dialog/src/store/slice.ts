
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const REDUCER_NAME = 'package/dialog';

const initialState = {
  isOpen: false,
  name: null,
  data: null,
};


const slice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    resetStateAction(state) {
      state['isOpen'] = false;
      state['name'] = null;
      state['data'] = null;
    },

    openDialogAction(state, { payload }: PayloadAction<typeof initialState>) {
      state['isOpen'] = true;
      state['name'] = payload['name'];
      state['data'] = payload?.['data'] ?? null;
    },

    closeDialogAction(state) {
      state['isOpen'] = false;
      state['name'] = null;
      state['data'] = null;
    },
  },
});

export const {
  resetStateAction,

  openDialogAction,
  closeDialogAction,
} = slice['actions'] as any;

export const selectName = (state: any) => state[REDUCER_NAME]['name'] as string;
export const selectData = (state: any) => state[REDUCER_NAME]['data'] as any;
export const selectIsOpen = (state: any) => state[REDUCER_NAME]['isOpen'] as boolean;

export const name = slice['name'] as string;
export const reducer = slice['reducer'];
