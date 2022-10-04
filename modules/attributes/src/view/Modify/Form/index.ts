
import { reduxForm } from 'redux-form';

import Component from './Component';


interface IError {
  [key: string]: string;
}


function validate(values: any): any {
  const error: IError = {};

  if ( ! ('category' in values)) {
    error['code'] = 'Необходимо выбрать';
  }

  if ( ! ('code' in values)) {
    error['code'] = 'Необходимо заполнить';
  }
  else if ( ! /^[a-zA-Z0-9-_]+$/.test(values['code'])) {
    error['code'] = 'Неверное значение';
  }

  if ( ! ('name' in values)) {
    error['name'] = 'Необходимо заполнить';
  }

  return error;
}

export default reduxForm({
  form: 'modify',
  validate,
})(Component) as any;