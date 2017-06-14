import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ProductsReducer from './products_reducer';
import AdminLoginReducer from './admin_login_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  products: ProductsReducer,
  adminLogin: AdminLoginReducer
});

export default rootReducer;
