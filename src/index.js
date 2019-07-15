import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

ReactDom.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);