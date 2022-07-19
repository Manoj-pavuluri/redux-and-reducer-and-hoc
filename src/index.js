import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import {store} from './app/store'
import OnclickCounter from './Hoc/OnclickCounter'
import HoverCounter from './useReducer/reducer';
import Main from './main';
import Component1 from './useContext/component1';
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    {/* <Provider store={store}>
    <App />
    
    </Provider> */}
    {/* <Main /> */}
    <Component1 />
    
  </React.StrictMode>
  
);


