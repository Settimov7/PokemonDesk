import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app/app.component';

import './index.global.scss';

const ROOT_ID = 'root';

const rootElement = document.getElementById(ROOT_ID);

ReactDOM.render(React.createElement(App), rootElement);
