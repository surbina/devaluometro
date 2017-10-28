import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function AppWithState() {
  return(
    <Provider store={store}>
      <App />
    </ Provider>
  );
}

ReactDOM.render(<AppWithState />, document.getElementById('root'));
registerServiceWorker();
