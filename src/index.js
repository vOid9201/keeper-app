import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

//new way of creating since ReactDOM.render() is no longer supported therefore this will be like this : )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);
