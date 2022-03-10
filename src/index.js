import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {reducer} from "./Redux/Reducer/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {logger} from "redux-logger/src";
const store = createStore(reducer,composeWithDevTools(applyMiddleware(logger)))
ReactDOM.render(
  <React.StrictMode>
			<Provider store={store}>
				<App/>
			</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
