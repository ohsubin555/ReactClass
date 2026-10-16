import React, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './days04/App';

import './days04/styles/flexbox.css';
import './days04/styles/city/cityflexbox.css';

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
   </StrictMode>  
);
 