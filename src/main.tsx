import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';

document.body.appendChild(
	Object.assign(document.createElement(`div`), { id: 'root' })
);
ReactDOM.render(<Button label="Mom" onClick={() => console.log("Hello")} />, document.getElementById('root'));