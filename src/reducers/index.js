import { combineReducers } from 'redux';

import booksList from './books-list';
import booksForm from './books-form';
import filter from './filter';

export default combineReducers({ booksList, filter, booksForm });
