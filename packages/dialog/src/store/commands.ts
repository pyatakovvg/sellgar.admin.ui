
import { Dispatch } from '@reduxjs/toolkit';

import {
  openDialogAction,
  closeDialogAction,
} from './slice';


export function openDialog(name: string, data: any = null): any {
  return function(dispatch: Dispatch) {
    dispatch(openDialogAction({ name, data }));
  }
}

export function closeDialog(): any {
  return function (dispatch: Dispatch) {
    dispatch(closeDialogAction());
  }
}
