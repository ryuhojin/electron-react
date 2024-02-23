import React from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import './globals.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
)