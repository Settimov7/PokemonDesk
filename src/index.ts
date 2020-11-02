import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

import './index.css';

const ROOT_ID = 'root';

const rootElement = document.getElementById(ROOT_ID);

ReactDOM.render(React.createElement(App), rootElement);
