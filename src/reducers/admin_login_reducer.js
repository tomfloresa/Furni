import _ from 'lodash';
import {SUBMIT_ADMIN_LOGIN_FORM} from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case SUBMIT_ADMIN_LOGIN_FORM:
      console.log(action, state);
  }
  return state;
}
