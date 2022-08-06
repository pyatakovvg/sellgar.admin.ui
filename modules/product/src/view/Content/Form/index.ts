
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

  if ( ! ('modes' in value)) {
    errors['modes'] = 'Необходимо добавить';
  }
  else if ( ! value['modes'].length) {
    errors['modes'] = 'Необходимо добавить';
  }
  else {
    const modeArrayErrors: Array<any> = [];
    value['modes'].forEach((mode: any, index: number) => {
      const modeErrors: any = {};

      if ( ! mode['vendor']) {
        modeErrors['vendor'] = 'Необходимо заполнить';
        modeArrayErrors[index] = modeErrors;
      }

      if ( ! mode['value']) {
        modeErrors['value'] = 'Необходимо заполнить';
        modeArrayErrors[index] = modeErrors;
      }

      if ( ! mode['price']) {
        modeErrors['price'] = 'Необходимо заполнить';
        modeArrayErrors[index] = modeErrors;
      }
    });

    if (modeArrayErrors.length) {
      errors['modes'] = modeArrayErrors;
    }
  }

  if ( ! ('attributes' in value)) {
    errors['attributes'] = 'Необходимо добавить';
  }
  else if ( ! value['attributes'].length) {
    errors['attributes'] = 'Необходимо добавить';
  }
  else {
    const attrArrayErrors: Array<any> = [];
    value['attributes'].forEach((attr: any, index: number) => {
      const attrErrors: any = {};

      if ( ! attr['attributeUuid']) {
        attrErrors['attributeUuid'] = 'Необходимо выбрать';
        attrArrayErrors[index] = attrErrors;
      }

      if ( ! attr['value']) {
        attrErrors['value'] = 'Необходимо заполнить';
        attrArrayErrors[index] = attrErrors;
      }
    });

    if (attrArrayErrors.length) {
      errors['attributes'] = attrArrayErrors;
    }
  }

  return errors;
}


export default reduxForm({
  form: 'modify',
  validate,
  enableReinitialize: true,
})(Component);
