import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// Redux Configuration
import { Provider } from 'react-redux';
import store from './redux/store/store';

// Router Configuration
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
)