import React from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import { worker } from './libs/api/mocks/browser';
import Root from './Root.jsx'
import './globals.css'

if (import.meta.env.DEV) {
  worker.start();
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
)