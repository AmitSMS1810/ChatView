import React from 'react'; // Ensure React is fully imported for StrictMode usage
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App'; // Removed the .jsx extension
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
