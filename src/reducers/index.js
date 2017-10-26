import { combineReducers } from 'redux';
import CatsReducer from './reducer_cats';
import ActiveCat from './reducer_active_cat';

const rootReducer = combineReducers({
  cats: CatsReducer,
  activeCat: ActiveCat
});

export default rootReducer;
