import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const simpleHandleClick = (event) => {
  event.target.innerText = "Hello"
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={(simpleHandleClick)} />
  </div>,
  document.getElementById('root')
);
