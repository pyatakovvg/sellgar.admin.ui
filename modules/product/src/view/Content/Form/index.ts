
import { reduxForm } from 'redux-form';

import Component from './Component';


function validate(value: any) {
  const errors = {};

  if ('gallery' in value) {
    if (!value['gallery'].length) {
      errors['gallery'] = 'Необходимо выбрать';
    }
  }

  if ('groupUuid' in value) {
    if ( ! value['groupUuid']) {
      errors['groupUuid'] = 'Необходимо выбрать';
    }
  }

  if ('categoryUuid' in value) {
    if ( ! value['categoryUuid']) {
      errors['categoryUuid'] = 'Необходимо выбрать';
    }
  }

  if ('brandUuid' in value) {
    if ( ! value['brandUuid']) {
      errors['brandUuid'] = 'Необходимо выбрать';
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
    const modeArrayErrors = [];
    value['modes'].forEach((mode, index) => {
      const modeErrors = {};

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
    const attrArrayErrors = [];
    value['attributes'].forEach((attr, index) => {
      const attrErrors = {};

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
