
import { reduxForm } from 'redux-form';

import Component from './Component';


function validate(value: any): any {
  const errors = {};

  if ( ! ('name' in value)) {
    errors['name'] = 'Необходимо заполнить';
  }

  if ( ! ('brand' in value)) {
    errors['brand'] = {};
    errors['brand']['uuid'] = 'Необходимо выбрать';
  }

  if ( ! ('vendor' in value)) {
    errors['vendor'] = 'Необходимо заполнить';
  }

  if ( ! ('count' in value) || value['count'] === '') {
    errors['count'] = 'Необходимо заполнить';
  }
  else if ( ! /^\d+$/.test(value['count'])) {
    errors['count'] = 'Неверный формат данных';
  }
  else if (value['count'] < 0) {
    errors['count'] = 'Неверный формат данных';
  }

  if ( ! ('reserve' in value) || value['reserve'] === '') {
    errors['reserve'] = 'Необходимо заполнить';
  }
  else if ( ! /^\d+$/.test(value['reserve'])) {
    errors['reserve'] = 'Неверный формат данных';
  }
  else if (value['reserve'] < 0) {
    errors['reserve'] = 'Неверное значение';
  }
  else if (value['reserve'] > value['count']) {
    errors['reserve'] = 'Неверное значение';
  }

  if ( ! ('price' in value) || value['price'] === '') {
    errors['price'] = 'Необходимо заполнить';
  }
  else if ( ! /^\d+(.\d{1,2})?$/.test(value['price'])) {
    errors['price'] = 'Неверный формат данных';
  }
  else if (value['price'] < 0) {
    errors['price'] = 'Неверное значение';
  }

  if ( ! ('purchasePrice' in value) || value['purchasePrice'] === '') {
    errors['purchasePrice'] = 'Необходимо заполнить';
  }
  else if ( ! /^\d+(.\d{1,2})?$/.test(value['purchasePrice'])) {
    errors['purchasePrice'] = 'Неверный формат данных';
  }
  else if (value['purchasePrice'] < 0) {
    errors['purchasePrice'] = 'Неверное значение';
  }

  if ( ! ('currency' in value)) {
    errors['currency'] = 'Необходимо выбрать';
  }

  return errors;
}


export default reduxForm({
  form: 'modify',
  validate,
  enableReinitialize: true,
})(Component);
