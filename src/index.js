import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') //cia pasizymi is index.html elementa ir i ji renderina App komponenta
);
// App komponentas jau yra React dalykas
// I viena index.html psl isspausdinu viska, kas ieina i App komponenta
// Labai svarbu, kad App butu jau sulinkinta su puslapiu (index.html), jeigu norime issispausdinti, kaip atrodo musu psl
