import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

// Add initial data
store.dispatch({
  type: 'CREATE_BOOK',
  id: 1,
  title: 'Book 1',
  category: 'Biography'
});
store.dispatch({
  type: 'CREATE_BOOK',
  id: 2,
  title: 'Book 2',
  category: 'History'
})

ReactDom.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);