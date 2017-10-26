import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import App2 from './App2';
import BookStore from './BookStore';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <App2 bookStore={BookStore} />, document.getElementById('root'));
registerServiceWorker();
