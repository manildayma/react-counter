import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counters from './Component/counters';
import * as serviceWorker from './serviceWorker';
import "./Bootstrap Classes/css/bootstrap.css";


ReactDOM.render(<Counters />, document.getElementById('root'));
serviceWorker.unregister();
