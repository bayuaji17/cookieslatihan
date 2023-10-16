import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterDefault } from './routes/RouterDefault';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
// const queryMovie = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterDefault />
  </React.StrictMode>
);