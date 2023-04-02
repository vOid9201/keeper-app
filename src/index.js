import React from 'react';
import ReactDOM from 'react-dom/client';

//new way of creating since ReactDOM.render() is no longer supported therefore this will be like this : )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <h1>Hello World!</h1>
  </React.StrictMode>
);
