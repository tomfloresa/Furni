import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ProductsReducer from './products_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  products: ProductsReducer
});

export default rootReducer;
