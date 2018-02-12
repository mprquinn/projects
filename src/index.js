import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Preload from './Preload';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Preload urls={['./project1.jpg', './project2.jpg', './project3.jpg']} />, document.getElementById('root'));
registerServiceWorker();
