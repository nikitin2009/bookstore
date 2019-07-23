import { combineReducers } from 'redux';

import booksList from './books';
import filter from './filter';

export default combineReducers({ booksList, filter });
