import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/js/partent';
import { dataAll } from './data/data'
ReactDOM.render(<App store={dataAll}/>, document.getElementById('root'));