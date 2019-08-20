import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// Nessa linha é possível observar que estamos pegando o arquivo "App.js" e usando-o para renderizar a div "root"
//Componente global
ReactDOM.render(<App />, document.getElementById('root'));