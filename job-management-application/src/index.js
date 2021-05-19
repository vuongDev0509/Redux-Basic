import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import './test.scss';
import Job_Management from './job-management';
// import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import myReducers from './reducers/index';
import { Provider} from 'react-redux';

const store = createStore(myReducers);


ReactDOM.render(
  <React.StrictMode>
  	 <Provider store={store}> <Job_Management /> </Provider>
      </React.StrictMode>,
  document.getElementById('page')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
