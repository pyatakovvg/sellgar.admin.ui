
import { reduxForm } from 'redux-form';

import Component from './Component';


export default reduxForm<IFolder>({
  form: 'modify',
})(Component);