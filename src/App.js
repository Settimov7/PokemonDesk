import React from 'react';
import classNames from 'classnames';

import style from './App.modules.scss';
import './custom.css';

export const App = () => (
	<div className={ classNames(style.header, 'color') }>This is App Component!</div>
);
