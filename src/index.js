import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterDefault } from './routes/RouterDefault';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterDefault/>
  </React.StrictMode>
);