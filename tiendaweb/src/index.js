import React from 'react';
import { createRoot } from 'react-dom/client'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Utiliza createRoot en lugar de ReactDOM.render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();