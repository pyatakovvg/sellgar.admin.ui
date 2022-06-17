
import {
  openDialogAction,
  closeDialogAction,
} from './slice';


export const openDialog = (name: string, data: any = null) => (dispatch: any) => {
  dispatch(openDialogAction({ name, data }));
};

export const closeDialog = () => (dispatch: any) => {
  dispatch(closeDialogAction());
};
