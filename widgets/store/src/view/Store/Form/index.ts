
import { reduxForm } from 'redux-form';

import Component from './Component';


export default reduxForm({
  form: 'store',
  enableReinitialize: true,
})(Component) as any;
