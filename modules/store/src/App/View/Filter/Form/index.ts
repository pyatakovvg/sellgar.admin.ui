
import { reduxForm } from 'redux-form';

import Component from './Component';


export default reduxForm<IFilter>({
  form: 'filter',
  enableReinitialize: true,
})(Component);
