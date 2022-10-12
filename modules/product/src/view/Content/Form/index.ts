
import { reduxForm } from 'redux-form';

import Component from './Component';


function validate(value: any) {
  const errors: any = {};

  if ('gallery' in value) {
    if (!value['gallery'].length) {
      errors['gallery'] = 'Необходимо выбрать';
    }
  }

  if ('groupCode' in value) {
    if ( ! value['groupCode']) {
      errors['groupCode'] = 'Необходимо выбрать';
    }
  }

  if ('categoryCode' in value) {
    if ( ! value['categoryCode']) {
      errors['categoryCode'] = 'Необходимо выбрать';
    }
  }

  if ('brandCode' in value) {
    if ( ! value['brandCode']) {
      errors['brandCode'] = 'Необходимо выбрать';
    }
  }

  if ('externalId' in value) {
    if ( ! value['externalId']) {
      errors['externalId'] = 'Необходимо заполнить';
    }
  }

  if ('title' in value) {
    if ( ! value['title']) {
      errors['title'] = 'Необходимо заполнить';
    }
  }

  if ('price' in value) {
    if ( ! value['price']) {
      errors['price'] = 'Необходимо заполнить';
    }
  }

  if ('purchasePrice' in value) {
    if ( ! value['purchasePrice']) {
      errors['purchasePrice'] = 'Необходимо заполнить';
    }
  }

  if (value['attributes'] && !! value['attributes'].length) {
    const groupArrayErrors: Array<any> = [];

    value['attributes'].forEach((attr: any, index: number) => {
      const groupErrors: any = {};

      if ( ! attr['name']) {
        groupErrors['name'] = 'Необходимо заполнить';
        groupArrayErrors[index] = groupErrors;
      }

      if (attr['values'] && !! attr['values'].length) {
        const valueArrayErrors: Array<any> = [];

        attr['values'].forEach((value: any, index: number) => {
          const valueErrors: any = {};

          if ( ! value['attributeUuid']) {
            valueErrors['attributeUuid'] = 'Необходимо выбрать';
            valueArrayErrors[index] = valueErrors;
          }

          if ( ! value['value']) {
            valueErrors['value'] = 'Необходимо заполнить';
            valueArrayErrors[index] = valueErrors;
          }
        });

        if (valueArrayErrors.length) {
          groupErrors['values'] = valueArrayErrors;
        }
      }
    });

    if (groupArrayErrors.length) {
      errors['attributes'] = groupArrayErrors;
    }
  }

  return errors;
}


export default reduxForm({
  form: 'modify',
  validate,
  enableReinitialize: true,
})(Component);
